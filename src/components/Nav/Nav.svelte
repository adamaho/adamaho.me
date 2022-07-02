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
		<NavItem href="/home">home</NavItem>
		<NavItem href="/projects">projects</NavItem>
		<NavItem href="/blog">blog</NavItem>
	</BottomSheetContent>
</BottomSheet>
