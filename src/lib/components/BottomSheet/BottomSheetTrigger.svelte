<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	import { getBottomSheetContext } from './BottomSheet.svelte';

	// sub to context
	const context = getBottomSheetContext();

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
