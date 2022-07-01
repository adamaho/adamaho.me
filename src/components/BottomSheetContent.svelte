<script lang="ts">
	import { getContext } from 'svelte';
	import { expoOut } from 'svelte/easing';

	import type { BottomSheetContext } from './BottomSheet.svelte';
	import { BOTTOM_SHEET_CONTEXT } from './BottomSheet.svelte';

	const context = getContext<BottomSheetContext>(BOTTOM_SHEET_CONTEXT);

	/**
	 * Define a custom bottom sheet animation
	 */
	function sheet(_node: HTMLElement, { duration = 400 }: { duration?: number }) {
		return {
			duration,
			css: (t: number) => {
				const eased = expoOut(t);
				return `transform: translate(-50%, -${eased * 100}%);`;
			}
		};
	}
</script>

{#if $context.isOpen}
	<div class="bottom-sheet-container" in:sheet out:sheet>
		<div class="bottom-sheet-content">
			<slot />
		</div>
	</div>
{/if}

<style>
	:root {
		--bottom-sheet-max-width: 450px;
	}

	.bottom-sheet-container {
		left: 50%;
		padding: 0 var(--aho-space-large) var(--aho-space-large) var(--aho-space-large);
		position: fixed;
		top: 100%;
		transform: translate(-50%, -100%);
		max-width: var(--bottom-sheet-max-width);
		width: 100%;
	}

	.bottom-sheet-content {
		background: var(--aho-colors-background-bottom-sheet);
		backdrop-filter: blur(5px);
		border-radius: var(--aho-radii-large);
		border: var(--aho-border-width-1) solid var(--aho-colors-border-subtle);
		height: 400px;
		width: 100%;
	}
</style>
