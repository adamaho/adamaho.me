<script lang="ts">
	import { getContext } from 'svelte';
	import { expoOut, linear } from 'svelte/easing';

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

	/**
	 * Define a custom blur animation
	 */
	function blur(_node: HTMLElement, { duration = 400 }: { duration?: number }) {
		return {
			duration,
			css: (t: number) => {
				const l = linear(t);
				return `backdrop-filter: blur(${
					l * 5
				}px); background-color: rgba(var(--aho-colors-background-site), ${l * 0.5})`;
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
	<div class="bottom-sheet-mask" on:click={() => context.setIsOpen(false)} in:blur out:blur />
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
		z-index: 2;
	}

	.bottom-sheet-content {
		background: linear-gradient(
			to bottom right,
			rgb(var(--aho-color-blue40)),
			rgb(var(--aho-color-purple50))
		);
		border-radius: var(--aho-radii-large);
		border: var(--aho-border-width-1) solid var(--aho-colors-border-subtle);
		/* box-shadow: 0 0 9px 2px rgba(var(--aho-color-grey100), 0.2); */
		height: 400px;
		width: 100%;
	}

	.bottom-sheet-mask {
		backdrop-filter: blur(5px);
		background-color: rgba(var(--aho-colors-background-site), 0.5);
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 1;
	}
</style>
