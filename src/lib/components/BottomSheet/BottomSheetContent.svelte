<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	import { sheet, blur } from '~/lib/transitions/index';

	import { getBottomSheetContext } from './BottomSheet.svelte';

	export let as: new (...args: any[]) => SvelteComponent;

	let bottomSheetElement: HTMLElement;
	let isDragging = false;
	let initialContactPointY = 0;
	let initialBottomSheetHeight = 0;
	let shiftYPercentage = -100;

	// sub to context
	const context = getBottomSheetContext();

	$: if ($context.isOpen) {
		document.body.style.overflow = 'hidden';
		document.body.style.position = 'relative';
		document.body.style.touchAction = 'none';
	}

	/**
	 * Handles the transition end
	 */
	function handleTransitionOutroEnd() {
		document.body.style.overflow = '';
		document.body.style.position = '';
		document.body.style.touchAction = '';
	}

	/**
	 * Handles the pointer down event
	 */
	function handlePointerDown(e: PointerEvent) {
		isDragging = true;
		initialContactPointY = e.y;
		initialBottomSheetHeight = bottomSheetElement.getBoundingClientRect().height;
	}

	function handlePointerMove(e: PointerEvent) {
		if (!isDragging) {
			return;
		}

		// compute the shift percentage based on the initial bottom sheet
		const newShiftPercentage =
			(1 - (e.y - initialContactPointY) / initialBottomSheetHeight) * -100;

		// if the new shift percentage is less than -100 it means that the user is
		// attempting to drag the bottom sheet up, which we dont support.
		if (newShiftPercentage < -100) {
			return;
		}

		// update the shift y percentage
		shiftYPercentage = newShiftPercentage;
	}

	/**
	 * Handles the pointer up event
	 */
	function handlePointerUp() {
		isDragging = false;

		if (shiftYPercentage >= -50) {
			context.setIsOpen(false);
		}

		shiftYPercentage = -100;
	}
</script>

<svelte:body on:pointerup={handlePointerUp} on:pointermove={handlePointerMove} />

{#if $context.isOpen}
	<footer
		class="bottom-sheet-container"
		style={`transform: translate(-50%, ${shiftYPercentage.toFixed()}%);`}
		on:pointerdown={handlePointerDown}
		bind:this={bottomSheetElement}
		in:sheet
		out:sheet={{ duration: 100, initialY: shiftYPercentage }}
	>
		<svelte:component this={as}>
			<slot />
		</svelte:component>
	</footer>
	<div
		class="bottom-sheet-mask"
		on:click={() => context.setIsOpen(false)}
		on:outroend={handleTransitionOutroEnd}
		in:blur
		out:blur
	/>
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
		will-change: transform;
		z-index: 2;
	}

	.bottom-sheet-mask {
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		background-color: rgba(var(--aho-colors-background-site), 0.5);
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 1;
	}
</style>
