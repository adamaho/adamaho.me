<script lang="ts">
	import { goto } from '$app/navigation';
	import { onDestroy, onMount } from 'svelte';

	import { shortcuts } from '~/stores/shortcuts';
	import { KeyCodes } from '~/constants/keycodes';

	import { BottomSheet } from '~/lib/components/BottomSheet';

	import NavContent from './NavContent.svelte';

	import NavTrigger from './NavTrigger.svelte';

	const NAV_SHORTCUTS = [
		{ key: KeyCodes.One, route: '/home' },
		{ key: KeyCodes.Two, route: '/writing' },
		{ key: KeyCodes.Three, route: '/preferences' }
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
	<NavTrigger />
	<NavContent />
</BottomSheet>
