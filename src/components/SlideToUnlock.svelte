<script lang="ts">
	import { browser } from '$app/env';

	import cx from 'clsx';

	import { createEventDispatcher } from 'svelte';

	import * as styles from './SlideToUnlock.css';

	enum KeyCodes {
		U = "u"
	}

	const dispatch = createEventDispatcher();

	const INITIAL_SHIFTX = 6;
	const TRACK_WIDTH = 242;

	let initialContactPointX: number;
	let shiftX = INITIAL_SHIFTX;
	let isActive = false;

	/**
	 * Handles dispatching the unlock event
	*/
	function handleUnlockDispatch() {
		dispatch("unlock");
	}

	/**
	 * Handles the pointer down event
	 * @param e PointerEvent
	 */
	function handlePointerDown(e: PointerEvent) {
		isActive = true;
		initialContactPointX = e.x;

		if (browser) {
			document.body.style.overflow = "hidden"
		}
	}

	/**
	 * Handles the pointer up event
	 * @param e PointerEvent
	 */
	function handlePointerUp() {
		isActive = false;

		if (shiftX < TRACK_WIDTH) {
			shiftX = INITIAL_SHIFTX;
		}

		if (shiftX >= TRACK_WIDTH) {
			shiftX = INITIAL_SHIFTX;
			handleUnlockDispatch();
		}

		if (browser) {
			document.body.style.overflow = "";
		}
	}

	/**
	 * Handles the pointer move event
	 * @param e PointerEvent
	 */
	function handlePointerMove(e: PointerEvent) {
		if (isActive) {
			const nextShiftX = e.x - initialContactPointX;

			if (nextShiftX > INITIAL_SHIFTX) {
				shiftX = nextShiftX;
			}

			if (nextShiftX > TRACK_WIDTH) {
				shiftX = TRACK_WIDTH;
			}
		}
	}

	/**
	 * Handles the keydown event
	 * @param e
	 */
	function handleKeydown(e: KeyboardEvent) {
		if ((e.metaKey || e.ctrlKey) && e.key === KeyCodes.U) {
			isActive = true;
			shiftX = TRACK_WIDTH;
			handleUnlockDispatch();
		}
	}

	/**
	 * Handles the keyup event
	*/
	function handleKeyup(e: KeyboardEvent) {
		isActive = false;
		shiftX = INITIAL_SHIFTX;
	}

</script>

<svelte:window on:pointermove={handlePointerMove} on:pointerup={handlePointerUp} on:keydown={handleKeydown} on:keyup={handleKeyup} />

<div class={cx(styles.slideToUnlockTrack, { [styles.slideToUnlockTrackActive]: isActive })}>
	<button
		class={cx(styles.slideToUnlockThumb, { [styles.slideToUnlockThumbActive]: isActive })}
		on:pointerdown={handlePointerDown}
		aria-label="slide to unlock or press command/control + u"
		style={`left: ${shiftX}px;`}
	/>
	<span class={cx(styles.slideToUnlockText, { [styles.slideToUnlockTextActive]: isActive })}>
		slide to enter
	</span>
</div>
