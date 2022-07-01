<script lang="ts">
	import {
		BottomSheet,
		BottomSheetContent,
		BottomSheetTrigger
	} from '~/lib/components/BottomSheet';

	import NavContent from './NavContent.svelte';
	import NavItem from './NavItem.svelte';
	import NavTrigger from './NavTrigger.svelte';
</script>

<BottomSheet>
	<BottomSheetTrigger as={NavTrigger}>Trigger</BottomSheetTrigger>
	<BottomSheetContent as={NavContent}>
		<NavItem>home</NavItem>
		<NavItem>projects</NavItem>
		<NavItem>writing</NavItem>
	</BottomSheetContent>
</BottomSheet>
