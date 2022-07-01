<script lang="ts">
	import BottomSheet from '~/components/BottomSheet.svelte';
	import BottomSheetTrigger from '~/components/BottomSheetTrigger.svelte';
	import BottomSheetContent from '~/components/BottomSheetContent.svelte';
	import NavTrigger from '~/components/NavTrigger.svelte';
</script>

<BottomSheet>
	<BottomSheetTrigger as={NavTrigger}>Trigger</BottomSheetTrigger>
	<BottomSheetContent>Hello World</BottomSheetContent>
</BottomSheet>
