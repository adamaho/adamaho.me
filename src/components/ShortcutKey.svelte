<script lang="ts">
	import { onMount } from 'svelte';

	let isMacOS = false;

	onMount(() => {
		isMacOS = navigator.userAgent.includes('Macintosh');
	});
</script>

<kbd class="shortcut-key" on:click>
	<slot>
		{#if isMacOS}
			⌘
		{:else}
			⌃
		{/if}
	</slot>
</kbd>

<style>
	.shortcut-key {
		align-items: center;
		border-radius: var(--aho-radii-small);
		display: flex;
		font-family: var(--aho-font-family-body);
		font-size: var(--aho-font-size-small);
		justify-content: center;
		padding: var(--aho-space-small) var(--aho-space-smedium);
	}

	:global(html[data-theme='light'] .shortcut-key) {
		background-color: rgb(var(--aho-color-grey30));
		color: rgb(var(--aho-color-grey80));
	}

	:global(html[data-theme='dark'] .shortcut-key) {
		background-color: rgb(var(--aho-color-grey80));
		color: rgb(var(--aho-color-grey40));
	}
</style>
