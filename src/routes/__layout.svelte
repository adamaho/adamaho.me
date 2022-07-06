<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import Nav from '~/components/Nav';
	import { theme } from '~/stores/theme';
	import { shortcuts } from '~/stores/shortcuts';

	import '~/styles/vars.css';

	onMount(() => {
		// init the theme on mount
		theme.initTheme();
	});
</script>

<svelte:window on:keydown={shortcuts.handleKeydown} />

{#if $theme.hasInitialized}
	<slot />
{/if}

<style global>
	html {
		height: -webkit-fill-available;
		background-color: rgb(var(--aho-colors-background-site));
	}

	body {
		color: var(--aho-colors-text-default);
		font-family: var(--aho-font-family-body);
		font-size: var(--aho-font-size-medium);
		font-weight: var(--aho-font-weight-thin);
		margin: 0;
		min-height: 100vh;
		min-height: -webkit-fill-available;
		--webkit-font-smoothing: 'antialiased';
	}

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
		padding: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: var(--aho-colors-heading-default);
		font-weight: var(--aho-font-weight-extra-bold);
		line-height: 1;
	}

	p,
	span {
		color: var(--aho-colors-text-default);
	}

	p {
		margin-top: var(--aho-space-small);
	}

	a {
		border-bottom: 1px solid var(--aho-colors-border-subtle);
		color: var(--aho-colors-link-default);
		font-weight: var(--aho-font-weight-normal);
		padding-bottom: var(--aho-space-xxsmall);
		text-decoration: none;
	}
</style>
