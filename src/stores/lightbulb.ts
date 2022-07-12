import { writable } from 'svelte/store';

function createLightbulStore() {
	const { subscribe, update, set } = writable(false);

	function toggleLightbulb() {
		update((c) => !c);
	}

	return {
		subscribe,
		update,
		set,
		toggleLightbulb
	};
}

export const lightbulb = createLightbulStore();
