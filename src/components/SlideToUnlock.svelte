<script lang="ts">
	import { onMount, createEventDispatcher, onDestroy } from 'svelte';

	import { ArrowRight } from '~/lib/components/Icons';
	import { KeyCodes } from '~/constants/keycodes';

	const dispatch = createEventDispatcher();

	const INITIAL_SHIFTX = 5;
	const TRACK_WIDTH = 235;

	let initialContactPointX: number;
	let shiftX = INITIAL_SHIFTX;
	let isActive = false;

	onMount(() => {
		document.body.style.touchAction = 'none';
	});

	onDestroy(() => {
		document.body.style.touchAction = '';
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
	on:keyup={handleKeyup} />

<div class="slide-to-unlock-track" class:slide-to-unlock-track-active={isActive}>
	<button
		class="slide-to-unlock-thumb"
		class:slide-to-unlock-thumb-active={isActive}
		on:pointerdown={handlePointerDown}
		aria-label="slide to unlock or press command/control + u"
		style={`left: ${shiftX}px;`}
	>
		<svelte:component this={ArrowRight} />
	</button>
</div>

<style>
	.slide-to-unlock-track {
		align-items: center;
		border-radius: 50px;
		display: flex;
		height: 50px;
		max-width: 280px;
		position: relative;
		transition-duration: var(--aho-animation-speed-fast);
		transition-property: box-shadow;
		transition-timing-function: ease;
		width: 100%;
	}

	:global(html[data-theme='dark'] .slide-to-unlock-track) {
		background: linear-gradient(
			to right,
			rgb(var(--aho-color-grey90)),
			rgb(var(--aho-color-grey100))
		);
		box-shadow: 0 0 0 3px rgba(var(--aho-color-grey90), 0.6);
	}

	:global(html[data-theme='light'] .slide-to-unlock-track) {
		background: linear-gradient(
			to right,
			rgb(var(--aho-color-grey30)),
			rgb(var(--aho-color-grey10))
		);
		box-shadow: 0 0 0 3px rgba(var(--aho-color-grey30), 0.6);
	}

	:global(html[data-theme='light'] .slide-to-unlock-track-active, html[data-theme='dark']
			.slide-to-unlock-track-active) {
		box-shadow: 0 0 0 3px rgba(var(--aho-colors-brand-primary), 0.8);
	}

	.slide-to-unlock-thumb {
		align-items: center;
		background: var(--aho-colors-gradients-brand);
		border-radius: 50%;
		border-width: var(--aho-radii-0);
		color: rgb(var(--aho-color-grey10));
		cursor: pointer;
		display: flex;
		height: var(--aho-space-4xlarge);
		justify-content: center;
		position: absolute;
		user-select: none;
		--webkit-user-select: none;
		width: var(--aho-space-4xlarge);
		transition-duration: var(--aho-animation-speed-fast);
		transition-property: transform;
		transition-timing-function: ease;
	}

	:global(.slide-to-unlock-thumb > svg) {
		height: var(--aho-space-large);
		width: var(--aho-space-large);
	}

	@keyframes nudge {
		0% {
			transform: translateX(0px);
		}
		5% {
			transform: translateX(10px);
		}
		10% {
			transform: translateX(0px);
		}
		15% {
			transform: translateX(10px);
		}
		20% {
			transform: translateX(0px);
		}
		100% {
		}
	}

	.slide-to-unlock-thumb:not(.slide-to-unlock-thumb-active) {
		animation-delay: 5s;
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-name: nudge;
		animation-timing-function: linear;
	}
</style>
