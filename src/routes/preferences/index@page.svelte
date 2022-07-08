<script lang="ts">
	import { theme } from '~/stores/theme';

	import Preference from '~/components/Preference.svelte';

	let value = $theme.theme;

	$: {
		theme.setTheme(value);
	}
</script>

<h1>Preferences</h1>
<p>Manage your preferences</p>

<hr class="separator" />

<h3 class="preference-page-title">Theme</h3>

<Preference>
	<svelte:fragment slot="title">Dark Mode</svelte:fragment>
	<svelte:fragment slot="description">
		When on, the interface color scheme will be dark.
	</svelte:fragment>
	<button>hello</button>
</Preference>

<Preference>
	<svelte:fragment slot="title">Primary Color</svelte:fragment>
	<svelte:fragment slot="description">Select your interface primary color.</svelte:fragment>
	<button>hello</button>
</Preference>

<Preference>
	<svelte:fragment slot="title">Secondary Color</svelte:fragment>
	<svelte:fragment slot="description">Select your interface secondary color.</svelte:fragment>
	<button>hello</button>
</Preference>

<style>
	.preference-page-title {
		margin-top: var(--aho-space-large);
		margin-bottom: var(--aho-space-smedium);
	}
</style>
