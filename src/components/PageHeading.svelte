<script lang="ts">
	import GoBack from './GoBack.svelte';

	export let title = '';

	export let goBackConfig: { href: string } | undefined = undefined;
</script>

<svelte:head>
	<title>Adam Aho - {title}</title>
</svelte:head>

{#if goBackConfig}
	<GoBack href={goBackConfig.href} />
{/if}
<h1>
	{title}
</h1>
<p class="description">
	<slot name="description" />
</p>
<hr class="separator" />

<style>
	.description {
		margin-top: var(--aho-space-small);
	}
</style>
