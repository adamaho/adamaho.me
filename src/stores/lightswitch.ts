import { writable } from 'svelte/store';

function createLightSwitchStore() {
	const { subscribe, update, set } = writable(true);

	function toggleLightswitch() {
		update((c) => !c);
	}

	return {
		subscribe,
		update,
		set,
		toggleLightswitch
	};
}

export const lightswitch = createLightSwitchStore();
