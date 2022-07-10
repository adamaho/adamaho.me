import { browser } from '$app/env';
import { writable } from 'svelte/store';

export enum Theme {
	Light = 'light',
	Dark = 'dark'
}

export enum ColorVars {
	Primary = 'primaryColor',
	Secondary = 'secondaryColor'
}

const LOCAL_STORAGE_THEME_KEY = 'theme';

/**
 *
 * Creates a theme store instance
 *
 * @returns theme store
 */
function createThemeStore() {
	// init the store
	const { subscribe, set } = writable({
		theme: Theme.Light,
		hasInitialized: false
	});

	/**
	 *
	 * Sets the theme
	 *
	 * @param theme The theme to set
	 */
	function setTheme(theme: Theme) {
		if (browser) {
			set({ theme, hasInitialized: true });
			localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
			const htmlElement = document.querySelector('html');

			if (htmlElement) {
				htmlElement.setAttribute('data-theme', theme);
				htmlElement.style.colorScheme = theme;
			}
		}
	}

	/**
	 * Initializes the colors from localstorage
	 */
	function initColors() {
		if (browser) {
			// check local storage first
			const primaryColor = localStorage.getItem(ColorVars.Primary) || '--aho-color-blue40';
			const secondaryColor =
				localStorage.getItem(ColorVars.Secondary) || '--aho-color-purple50';

			// set the colors on the document element
			document.documentElement.style.setProperty(
				'--aho-colors-brand-primary',
				`var(${primaryColor})`
			);
			document.documentElement.style.setProperty(
				'--aho-colors-brand-secondary',
				`var(${secondaryColor})`
			);
		}
	}

	/**
	 * Initializes the theme. Generally used when the application first loads
	 */
	function initTheme() {
		if (browser) {
			// init the colors
			initColors();

			// check local storage first
			const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

			if (localStorageTheme) {
				setTheme(localStorageTheme);
				return;
			}

			// check the match media for the prefered theme
			if (window.matchMedia('prefers-color-scheme: dark')) {
				setTheme(Theme.Dark);
			}
		}
	}

	return {
		subscribe,
		setTheme,
		initTheme
	};
}

export const theme = createThemeStore();
