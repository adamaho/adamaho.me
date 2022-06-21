import { browser } from "$app/env";
import { writable } from "svelte/store";

export enum Theme {
  Light = "light",
  Dark = "dark"
};

const LOCAL_STORAGE_THEME_KEY = "theme";

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
      document.querySelector("html")?.setAttribute("data-theme", theme);
    }
  }

  /**
   * Initializes the theme. Generally used when the application first loads
   */
  function initTheme() {
    if (browser) {
      // check local storage first
      const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
  
      if (localStorageTheme) {
        setTheme(localStorageTheme)
      }
  
      // check the match media for the prefered theme
      if (window.matchMedia("prefers-color-scheme: dark")) {
        setTheme(Theme.Dark);
      }
    }
  }

  return {
    subscribe,
    setTheme,
    initTheme,
  }
}

export const theme = createThemeStore();