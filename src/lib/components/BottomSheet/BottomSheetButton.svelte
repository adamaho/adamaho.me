<script lang="ts">
	import { getContext, createEventDispatcher, type SvelteComponent } from 'svelte';

	import { BOTTOM_SHEET_CONTEXT, type BottomSheetContext } from './BottomSheet.svelte';

	export let as: new (...args: any[]) => SvelteComponent;

	const context = getContext<BottomSheetContext>(BOTTOM_SHEET_CONTEXT);

	const dispatch = createEventDispatcher();

	/**
	 * handle the click event
	 */
	function handleClick(e: MouseEvent) {
		context.setIsOpen(false);
		dispatch('click', e);
	}
</script>

<svelte:component this={as} {...$$restProps} on:click={handleClick}>
	<slot />
</svelte:component>
