<script lang="ts">
	import {
		BottomSheet,
		BottomSheetContent,
		BottomSheetTrigger
	} from '~/lib/components/BottomSheet';

	import { Home, Lightbulb, Pencil } from '~/lib/components/Icons';

	import NavContent from './NavContent.svelte';
	import NavItem from './NavItem.svelte';
	import NavTrigger from './NavTrigger.svelte';
</script>

<BottomSheet>
	<BottomSheetTrigger as={NavTrigger} />
	<BottomSheetContent as={NavContent}>
		<NavItem href="/home">
			<svelte:fragment slot="shortcut">^ 1</svelte:fragment>
			<svelte:component this={Home} slot="icon" />
			home
		</NavItem>
		<NavItem href="/projects">
			<svelte:fragment slot="shortcut">^ 2</svelte:fragment>
			<svelte:component this={Lightbulb} slot="icon" />
			projects
		</NavItem>
		<NavItem href="/blog">
			<svelte:fragment slot="shortcut">^ 3</svelte:fragment>
			<svelte:component this={Pencil} slot="icon" />
			blog
		</NavItem>
	</BottomSheetContent>
</BottomSheet>
