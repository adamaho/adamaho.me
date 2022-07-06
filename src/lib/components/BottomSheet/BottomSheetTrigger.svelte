<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { getBottomSheetContext } from './BottomSheet.svelte';

	// sub to context
	const context = getBottomSheetContext();

	const dispatch = createEventDispatcher();

	function handleTriggerClick() {
		context.update((c) => ({ ...c, isOpen: !c.isOpen }));
		dispatch('triggerclick');
	}
</script>

<div on:click={handleTriggerClick}>
	<slot />
</div>
