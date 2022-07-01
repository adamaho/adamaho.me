<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { getContext, createEventDispatcher } from 'svelte';

	import type { BottomSheetContext } from './BottomSheet.svelte';
	import { BOTTOM_SHEET_CONTEXT } from './BottomSheet.svelte';

	const context = getContext<BottomSheetContext>(BOTTOM_SHEET_CONTEXT);

	const dispatch = createEventDispatcher();

	export let as: new (...args: any[]) => SvelteComponent;

	function handleTriggerClick() {
		context.update((c) => ({ ...c, isOpen: !c.isOpen }));
		dispatch('triggerclick');
	}
</script>

<svelte:component this={as} on:click={handleTriggerClick}>
	<slot />
</svelte:component>
