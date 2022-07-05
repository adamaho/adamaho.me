<script lang="ts">
	import { getBottomSheetContext } from '~/lib/components/BottomSheet/BottomSheet.svelte';

	import { KeyCodes } from '~/constants/keycodes';

	// sub to context
	const context = getBottomSheetContext();

	/**
	 * Handles the keydown event and open the bottom sheet
	 * @param e
	 */
	function handleKeydown(e: KeyboardEvent) {
		if ((e.metaKey || e.ctrlKey) && e.key === KeyCodes.K) {
			context.setIsOpen(true);
			return;
		}
	}
</script>

<svelte:body on:keydown={handleKeydown} />

<button class="nav-trigger" on:click>
	<slot />
</button>

<style>
	.nav-trigger {
		background: var(--aho-colors-gradients-brand);
		border: none;
		border-radius: 50%;
		bottom: var(--aho-space-xlarge);
		height: var(--aho-space-5xlarge);
		left: 50%;
		position: fixed;
		transform: translate(-50%);
		transition: border-radius var(--aho-animation-speed-fast) ease;
		width: var(--aho-space-5xlarge);
	}

	.nav-trigger:hover {
		border-radius: var(--aho-radii-large);
	}
</style>
