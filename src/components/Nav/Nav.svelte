<script lang="ts">
	import { goto } from '$app/navigation';

	import { shortcuts } from '~/stores/shortcuts';
	import { KeyCodes } from '~/constants/keycodes';

	import {
		BottomSheet,
		BottomSheetContent,
		BottomSheetTrigger
	} from '~/lib/components/BottomSheet';

	import { Contrast, Home, Lightbulb, Pencil } from '~/lib/components/Icons';

	import NavContent from './NavContent.svelte';
	import NavItem from './NavItem.svelte';
	import NavTrigger from './NavTrigger.svelte';
	import { onDestroy, onMount } from 'svelte';

	const NAV_SHORTCUTS = [
		{ key: KeyCodes.One, route: '/home' },
		{ key: KeyCodes.Two, route: '/projects' },
		{ key: KeyCodes.Three, route: '/blog' },
		{ key: KeyCodes.Four, route: '/settings' }
	];

	// When the component mounts, add the shortcut listeners
	onMount(() => {
		NAV_SHORTCUTS.forEach((s) => {
			shortcuts.registerShortcut(new Set([KeyCodes.Ctrl, s.key]), () => {
				goto(s.route);
			});
		});
	});

	// When the component unmounts, remove the shortcut listeners
	onDestroy(() => {
		NAV_SHORTCUTS.forEach((s) => {
			shortcuts.unregisterShortcut(new Set([KeyCodes.Ctrl, s.key]));
		});
	});
</script>

<BottomSheet>
	<BottomSheetTrigger>
		<NavTrigger />
	</BottomSheetTrigger>
	<BottomSheetContent>
		<NavContent>
			<NavItem href="/home" label="home">
				<svelte:fragment slot="shortcut">^ 1</svelte:fragment>
				<svelte:component this={Home} slot="icon" />
			</NavItem>
			<NavItem href="/projects" label="projects">
				<svelte:fragment slot="shortcut">^ 2</svelte:fragment>
				<svelte:component this={Lightbulb} slot="icon" />
			</NavItem>
			<NavItem href="/blog" label="blog">
				<svelte:fragment slot="shortcut">^ 3</svelte:fragment>
				<svelte:component this={Pencil} slot="icon" />
			</NavItem>
			<NavItem href="/settings" label="settings">
				<svelte:fragment slot="shortcut">^ 4</svelte:fragment>
				<svelte:component this={Contrast} slot="icon" />
			</NavItem>
			<svelte:fragment slot="socials">
				<div>github</div>
				<div>twitter</div>
				<div>linked in</div>
			</svelte:fragment>
		</NavContent>
	</BottomSheetContent>
</BottomSheet>
