<script lang="ts">
	import cx from 'clsx';

	import { createEventDispatcher } from 'svelte';

	import * as styles from './SlideToUnlock.css';

	const dispatch = createEventDispatcher();

	const INITIAL_SHIFTX = 6;
	const TRACK_WIDTH = 242;

	let initialContactPointX: number;
	let shiftX = INITIAL_SHIFTX;
	let isActive = false;

	/**
	 * Handles the pointer down event
	 * @param e PointerEvent
	 */
	function handlePointerDown(e: PointerEvent) {
		isActive = true;
		initialContactPointX = e.x;
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
			dispatch('unlock');
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
</script>

<svelte:window on:pointermove={handlePointerMove} on:pointerup={handlePointerUp} />

<div class={cx(styles.slideToUnlockTrack, { [styles.slideToUnlockTrackActive]: isActive })}>
	<button
		class={cx(styles.slideToUnlockThumb, { [styles.slideToUnlockThumbActive]: isActive })}
		on:pointerdown={handlePointerDown}
		style={`left: ${shiftX}px;`}
	/>
	<span class={cx(styles.slideToUnlockText, { [styles.slideToUnlockTextActive]: isActive })}>
		slide to enter
	</span>
</div>
