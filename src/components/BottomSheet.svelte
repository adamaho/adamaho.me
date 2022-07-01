<script lang="ts" context="module">
	import type { Writable } from 'svelte/store';

	export interface BottomSheetStore {
		isOpen?: boolean;
	}

	export interface BottomSheetContext extends Writable<BottomSheetStore> {
		setIsOpen: (isOpen: boolean) => void;
	}

	export const BOTTOM_SHEET_CONTEXT = 'BOTTOM_SHEET_CONTEXT';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	/**
	 * Factory to create the bottom sheet store
	 */
	function createBottomSheetStore() {
		const { subscribe, set, update } = writable({
			isOpen: false
		});

		/**
		 * Handles setting the isOpen state
		 */
		function setIsOpen(isOpen: boolean) {
			return update((c) => {
				return {
					...c,
					isOpen
				};
			});
		}

		return {
			subscribe,
			set,
			update,
			setIsOpen
		};
	}

	const bottomSheetStore = createBottomSheetStore();

	setContext(BOTTOM_SHEET_CONTEXT, bottomSheetStore);
</script>

<slot />
