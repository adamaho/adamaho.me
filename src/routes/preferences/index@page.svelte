<script lang="ts">
	import { Theme, theme } from '~/stores/theme';

	import Switch from '~/lib/components/Switch.svelte';
	import Preference from '~/components/Preference.svelte';
	import ColorPicker from '~/components/ColorPicker.svelte';
	import PageHeading from '~/components/PageHeading.svelte';

	let isDarkMode: boolean = $theme.theme === Theme.Dark;

	$: {
		if (isDarkMode) {
			theme.setTheme(Theme.Dark);
		} else {
			theme.setTheme(Theme.Light);
		}
	}
</script>

<PageHeading title="Preferences" tabTitle="Preferences">
	<svelte:fragment slot="description">Manage your preferences</svelte:fragment>
</PageHeading>

<h3 class="preference-page-title">Theme</h3>

<Preference>
	<svelte:fragment slot="title">Dark Mode</svelte:fragment>
	<svelte:fragment slot="description">
		When on, the interface color scheme will be dark.
	</svelte:fragment>
	<Switch bind:checked={isDarkMode} />
</Preference>

<Preference>
	<svelte:fragment slot="title">Primary Color</svelte:fragment>
	<svelte:fragment slot="description">Select your interface primary color.</svelte:fragment>
	<ColorPicker
		defaultColor="--aho-color-blue40"
		cssVar="--aho-colors-brand-primary"
		name="Primary"
		colors={[
			'--aho-color-red40',
			'--aho-color-orange40',
			'--aho-color-yellow40',
			'--aho-color-green40',
			'--aho-color-blue40',
			'--aho-color-purple40',
			'--aho-color-pink40'
		]}
	/>
</Preference>

<Preference>
	<svelte:fragment slot="title">Secondary Color</svelte:fragment>
	<svelte:fragment slot="description">Select your interface secondary color.</svelte:fragment>
	<ColorPicker
		defaultColor="--aho-color-purple50"
		cssVar="--aho-colors-brand-secondary"
		name="Secondary"
		colors={[
			'--aho-color-red50',
			'--aho-color-orange50',
			'--aho-color-yellow50',
			'--aho-color-green50',
			'--aho-color-blue50',
			'--aho-color-purple50',
			'--aho-color-pink50'
		]}
	/>
</Preference>

<style>
	.preference-page-title {
		margin-top: var(--aho-space-large);
		margin-bottom: var(--aho-space-smedium);
	}
</style>
