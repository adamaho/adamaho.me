import { writable } from 'svelte/store';
import { KeyCodes } from '~/constants/keycodes';

type ShortcutKey = Set<KeyCodes>;
type ShortcutsStore = Map<ShortcutKey, (e: KeyboardEvent) => void>;

/**
 * Factory used to create the shortcuts store
 */
function createShortcutStore() {
	const { subscribe, update } = writable<ShortcutsStore>(new Map());

	/**
	 *
	 * Adds the keyboard key and callback to the shortcuts store
	 *
	 * @param key The keyboard keys to call callback for
	 * @param callback The function to call when the shortcut key is matched
	 */
	function registerShortcut(key: ShortcutKey, callback: (e: KeyboardEvent) => void) {
		update((c) => {
			const newKeys = new Map(c);

			newKeys.set(key, callback);

			return newKeys;
		});
	}

	/**
	 *
	 * Removes the keyboard key and callback from the shortcuts store
	 *
	 * @param key The keyboard key to remove
	 */
	function unregisterShortcut(key: ShortcutKey) {
		update((c) => {
			const newKeys = new Map(c);

			newKeys.delete(key);

			return newKeys;
		});
	}

	/**
	 * Handles the keyboard event and runs the callbacks for each key combination
	 */
	function runCallback(e: KeyboardEvent) {
		subscribe((value) => {
			for (const [keys, callback] of value.entries()) {
				// meta and shift and key
				if (
					keys.has(KeyCodes.Ctrl) &&
					e.ctrlKey &&
					keys.has(KeyCodes.Shift) &&
					e.shiftKey &&
					keys.has(e.key as KeyCodes)
				) {
					callback(e);
				}

				// meta and key
				if (keys.has(KeyCodes.Ctrl) && e.ctrlKey && keys.has(e.key as KeyCodes)) {
					callback(e);
				}
			}
		});
	}

	/**
	 *
	 * Handles the keydown event
	 *
	 * @param e KeyboardEvent
	 */
	function handleKeydown(e: KeyboardEvent) {
		runCallback(e);
	}

	return {
		registerShortcut,
		unregisterShortcut,
		handleKeydown
	};
}

export const shortcuts = createShortcutStore();
