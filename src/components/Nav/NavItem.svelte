<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { getBottomSheetContext } from '~/lib/components/BottomSheet/BottomSheet.svelte';

	export let href: string;
	export let label: string;

	// sub to context
	const context = getBottomSheetContext();

	// create an event dispatcher
	const dispatch = createEventDispatcher();

	/**
	 * handle the click event
	 */
	function handleClick(e: MouseEvent) {
		context.setIsOpen(false);
		dispatch('click', e);
	}
</script>

<a {href} class="nav-item" on:click={handleClick} aria-label={`go to ${label}`}>
	<div class="nav-item-icon">
		<slot name="icon" class="nav-item-icon" />
	</div>
	<span class="nav-item-text">
		{label}
	</span>
</a>

<style>
	.nav-item {
		align-items: center;
		background-color: rgba(var(--aho-color-grey10), 0.5);
		border: 0;
		border-radius: var(--aho-radii-medium);
		display: flex;
		flex-direction: column;
		font-size: var(--aho-font-size-smedium);
		gap: var(--aho-space-xsmall);
		justify-content: space-between;
		padding: var(--aho-space-small);
		position: relative;
		text-decoration: none;
		transition: background-color var(--aho-animation-speed-fast) ease;
		will-change: background-color;
		width: 100%;
	}

	.nav-item:hover {
		background-color: rgba(var(--aho-color-grey10), 0.7);
	}

	.nav-item-icon {
		height: var(--aho-space-3xlarge);
		width: var(--aho-space-3xlarge);
	}

	.nav-item-text {
		color: rgb(var(--aho-color-grey70));
	}

	:global(.nav-item:hover .nav-item-icon > svg) {
		transform: scale(var(--aho-scale-large));
	}

	:global(.nav-item-icon > svg) {
		height: 100%;
		transition: transform var(--aho-animation-speed-fast) ease;
		will-change: transform;
		width: 100%;
	}
</style>
