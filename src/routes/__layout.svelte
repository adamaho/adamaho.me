<script lang="ts">
	import { onMount } from 'svelte';

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
		height: 100vh;
		overflow-x: hidden;
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

	h2 {
		margin-top: var(--aho-space-5xlarge);
	}

	h3 {
		margin-top: var(--aho-space-2xlarge);
	}

	p,
	span {
		color: var(--aho-colors-text-default);
	}

	p {
		margin-top: var(--aho-space-large);
	}

	a {
		border-bottom: 1px solid var(--aho-colors-border-subtle);
		color: var(--aho-colors-link-default);
		font-weight: var(--aho-font-weight-normal);
		text-decoration: none;
	}

	.separator {
		background-color: var(--aho-colors-separator);
		border: 0;
		height: var(--aho-space-px);
		margin: 0;
		margin-top: var(--aho-space-2xlarge);
		margin-bottom: var(--aho-space-large);
		width: var(--aho-space-6xlarge);
	}

	code.inline {
		background-color: rgb(var(--aho-colors-background-widget), 0.4);
		border-radius: var(--aho-radii-small);
		color: var(--aho-colors-code-keyword);
		font-size: var(--aho-font-size-smedium);
		padding: var(--aho-space-xxsmall) var(--aho-space-small);
	}

	pre {
		background-color: rgb(var(--aho-colors-background-widget), 0.4);
		border-radius: var(--aho-radii-medium);
		font-size: var(--aho-font-size-smedium);
		margin: var(--aho-space-large) 0;
		overflow-x: auto;
		padding: var(--aho-space-large);
	}

	.token.language-svelte,
	.token.language-javascript,
	code.language-svelte,
	code.language-javascript {
		color: var(--aho-colors-code-punctuation);
	}

	.token.operator {
		color: var(--aho-colors-code-punctuation);
	}

	.token.function {
		color: var(--aho-colors-code-function);
	}

	.token.property {
		color: var(--aho-colors-code-property);
	}

	.token.punctuation {
		color: var(--aho-colors-code-punctuation);
	}

	.token.string {
		color: var(--aho-colors-code-string);
	}

	.token.tag {
		color: var(--aho-colors-code-tag);
	}

	.token.namespace,
	.token.attr-name {
		color: var(--aho-colors-code-attr);
	}

	.token.keyword {
		color: var(--aho-colors-code-keyword);
	}
</style>
