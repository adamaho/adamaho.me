<script lang="ts">
	import { goto } from '$app/navigation';
	import ShortcutKey from '~/components/ShortcutKey.svelte';
	import SlideToUnlock from '~/components/SlideToUnlock.svelte';

	let isUnlocked = false;

	function handleUnlock() {
		isUnlocked = true;
	}

	function handleAnimationEnd() {
		goto('/home');
	}
</script>

<div class="welcome" on:animationend={handleAnimationEnd}>
	<div class="welcome-heading" class:welcome-heading-out={isUnlocked}>
		<h1>Welcome</h1>
		<span>Thanks for stopping by 😀</span>
	</div>
	<div class="welcome-unlock" class:welcome-unlock-out={isUnlocked}>
		<SlideToUnlock on:unlock={handleUnlock} />
		<div class="shortcuts">
			<ShortcutKey />
			<ShortcutKey>enter</ShortcutKey>
		</div>
	</div>
</div>

<style>
	.welcome {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		gap: var(--aho-space-4xlarge);
		min-height: 100vh;
		padding-top: var(--aho-space-medium);
		padding-bottom: var(--aho-space-large);
	}

	@keyframes fly-up {
		0% {
			opacity: 1;
			transform: translateY(0px);
		}
		50% {
			opacity: 1;
			transform: translateY(10px);
		}
		100% {
			opacity: 0;
			transform: translateY(-50px);
		}
	}

	.welcome-heading {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--aho-space-xxsmall);
		width: 100%;
	}

	.welcome-heading-out {
		animation-name: fly-up;
		animation-duration: var(--aho-animation-speed-medium);
		animation-fill-mode: forwards;
		animation-timing-function: ease-out;
	}

	.welcome-unlock {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--aho-space-large);
		width: 100%;
	}

	@keyframes fly-down {
		0% {
			opacity: 1;
			transform: translateY(0px);
		}
		50% {
			opacity: 1;
			transform: translateY(-10px);
		}
		100% {
			opacity: 0;
			transform: translateY(50px);
		}
	}

	.welcome-unlock-out {
		animation-name: fly-down;
		animation-duration: var(--aho-animation-speed-medium);
		animation-fill-mode: forwards;
		animation-timing-function: ease-out;
	}

	.shortcuts {
		align-items: center;
		display: none;
		justify-content: center;
		gap: var(--aho-space-small);
	}

	@media screen and (min-width: 640px) {
		.shortcuts {
			display: flex;
		}
	}
</style>
