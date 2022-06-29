<script lang="ts">
    import cx from 'clsx';

	import { onMount, createEventDispatcher, onDestroy } from 'svelte';

	import * as styles from './SlideToUnlock.css';

	enum KeyCodes {
		Enter = 'Enter'
	}

	const dispatch = createEventDispatcher();

	const INITIAL_SHIFTX = 6;
	const TRACK_WIDTH = 242;

	let initialContactPointX: number;
	let shiftX = INITIAL_SHIFTX;
	let isActive = false;

    onMount(() => {
        document.body.style.touchAction = "none";
    });

    onDestroy(() => {
        document.body.style.touchAction = "";
    });

	/**
	 * Handles dispatching the unlock event
	 */
	function handleUnlockDispatch() {
		dispatch('unlock');
	}

	/**
	 * Handles the pointer down event
	 * @param e PointerEvent
	 */
	function handlePointerDown(e: PointerEvent) {
		isActive = true;
		initialContactPointX = e.x;

        document.body.style.overflow = 'hidden';
	}

	/**
	 * Handles the pointer up event
	 * @param e PointerEvent
	 */
	function handlePointerUp(e: PointerEvent) {
        if (shiftX < TRACK_WIDTH) {
            isActive = false;
			shiftX = INITIAL_SHIFTX;
		}

		if (shiftX >= TRACK_WIDTH) {
			handleUnlockDispatch();
		}

        document.body.style.overflow = '';
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
		if ((e.metaKey || e.ctrlKey) && e.key === KeyCodes.Enter) {
			isActive = true;
			shiftX = TRACK_WIDTH;
		}
	}

	/**
	 * Handles the keyup event
	 */
	function handleKeyup() {
		if (shiftX === TRACK_WIDTH) {
			handleUnlockDispatch();
		}
	}
</script>

<svelte:body
	on:pointermove={handlePointerMove}
	on:pointerup={handlePointerUp}
	on:keydown={handleKeydown}
	on:keyup={handleKeyup}
/>

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
