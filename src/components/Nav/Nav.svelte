<script lang="ts">
	import {
		BottomSheet,
		BottomSheetButton,
		BottomSheetContent,
		BottomSheetTrigger
	} from '~/lib/components/BottomSheet';

	import NavContent from './NavContent.svelte';
	import NavItem from './NavItem.svelte';
	import NavTrigger from './NavTrigger.svelte';
</script>

<BottomSheet>
	<BottomSheetTrigger as={NavTrigger} />
	<BottomSheetContent as={NavContent}>
		<BottomSheetButton as={NavItem} href="/home">home</BottomSheetButton>
		<BottomSheetButton as={NavItem} href="/projects">projects</BottomSheetButton>
		<BottomSheetButton as={NavItem} href="/blog">blog</BottomSheetButton>
	</BottomSheetContent>
</BottomSheet>
