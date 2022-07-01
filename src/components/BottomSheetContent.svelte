<script lang="ts">
	import { getContext } from 'svelte';

    import { sheet, blur } from '~/transitions/index';
	import type { BottomSheetContext } from './BottomSheet.svelte';
	import { BOTTOM_SHEET_CONTEXT } from './BottomSheet.svelte';

	const context = getContext<BottomSheetContext>(BOTTOM_SHEET_CONTEXT);

	$: if ($context.isOpen) {
		document.body.style.overflow = 'hidden';
		document.body.style.position = 'relative';
	}

	/**
	 * Handles the transition end
	 */
	function handleTransitionOutroEnd() {
		document.body.style.overflow = '';
		document.body.style.position = '';
	}
</script>

{#if $context.isOpen}
	<div class="bottom-sheet-container" in:sheet out:sheet>
		<div class="bottom-sheet-content">
			<slot />
		</div>
	</div>
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
		z-index: 2;
	}

	.bottom-sheet-content {
		background: linear-gradient(
			to bottom right,
			rgb(var(--aho-color-blue40)),
			rgb(var(--aho-color-purple50))
		);
		border-radius: var(--aho-radii-large);
		height: 240px;
		width: 100%;
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
