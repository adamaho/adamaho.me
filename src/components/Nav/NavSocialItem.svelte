<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { getBottomSheetContext } from '~/lib/components/BottomSheet/BottomSheet.svelte';
	import { ExternalLink } from '~/lib/components/Icons';

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

<a
	{href}
	class="nav-social-item"
	on:click={handleClick}
	aria-label={`open ${label}`}
	target="_blank"
>
	<div class="nav-social-item-content">
		<div class="nav-social-item-icon">
			<slot />
		</div>
		<span class="nav-social-item-text">
			{label}
		</span>
	</div>
	<div class="nav-social-item-external-link">
		<ExternalLink />
	</div>
</a>

<style>
	.nav-social-item {
		align-items: center;
		background-color: rgba(var(--aho-color-grey10), 0.5);
		border: 0;
		border-radius: var(--aho-radii-medium);
		display: flex;
		gap: var(--aho-space-xsmall);
		justify-content: space-between;
		padding: var(--aho-space-smedium);
		position: relative;
		text-decoration: none;
		transition: background-color var(--aho-animation-speed-fast) ease;
		will-change: background-color;
		width: 100%;
	}

	.nav-social-item:hover {
		background-color: rgba(var(--aho-color-grey10), 0.7);
	}

	.nav-social-item-content {
		align-items: center;
		display: flex;
		gap: var(--aho-space-small);
	}

	.nav-social-item-icon {
		color: rgb(var(--aho-color-grey80));
		height: var(--aho-space-large);
		width: var(--aho-space-large);
	}

	.nav-social-item-text {
		color: rgb(var(--aho-color-grey70));
		font-size: var(--aho-font-size-medium);
	}

	:global(.nav-social-item:hover .nav-social-item-icon > svg) {
		transform: scale(var(--aho-scale-xlarge));
	}

	:global(.nav-social-item-icon > svg) {
		height: 100%;
		transition: transform var(--aho-animation-speed-fast) ease;
		will-change: transform;
		width: 100%;
	}

	.nav-social-item-external-link {
		color: rgb(var(--aho-color-grey70));
		height: var(--aho-space-large);
		width: var(--aho-space-large);
	}

	:global(.nav-social-item-external-link > svg) {
		height: 100%;
		width: 100%;
	}
</style>
