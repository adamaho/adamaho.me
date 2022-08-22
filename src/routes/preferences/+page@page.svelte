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

<div class="preferences">
	<PageHeading title="Preferences">
		<svelte:fragment slot="description">Manage your preferences</svelte:fragment>
	</PageHeading>

	<h2 class="preference-page-title">Theme</h2>

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
				{
					color: '--aho-color-red40',
					name: 'primary red'
				},
				{
					color: '--aho-color-orange40',
					name: 'primary orange'
				},
				{
					color: '--aho-color-yellow40',
					name: 'primary yellow'
				},
				{
					color: '--aho-color-green40',
					name: 'primary green'
				},
				{
					color: '--aho-color-blue40',
					name: 'primary blue'
				},
				{
					color: '--aho-color-purple40',
					name: 'primary purple'
				},
				{
					color: '--aho-color-pink40',
					name: 'primary pink'
				}
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
				{
					color: '--aho-color-red50',
					name: 'secondary red'
				},
				{
					color: '--aho-color-orange50',
					name: 'secondary orange'
				},
				{
					color: '--aho-color-yellow50',
					name: 'secondary yellow'
				},
				{
					color: '--aho-color-green50',
					name: 'secondary green'
				},
				{
					color: '--aho-color-blue50',
					name: 'secondary blue'
				},
				{
					color: '--aho-color-purple50',
					name: 'secondary purple'
				},
				{
					color: '--aho-color-pink50',
					name: 'secondary pink'
				}
			]}
		/>
	</Preference>
</div>

<style>
	.preferences {
		padding-bottom: var(--aho-space-7xlarge);
	}

	.preference-page-title {
		margin-top: var(--aho-space-large);
		margin-bottom: var(--aho-space-smedium);
	}
</style>
