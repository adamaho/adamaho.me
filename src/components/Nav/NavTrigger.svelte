<script lang="ts">
	import { fly } from 'svelte/transition';
	import { BottomSheetTrigger } from '~/lib/components/BottomSheet';
	import { Menu } from '~/lib/components/Icons';
</script>

<BottomSheetTrigger>
	<div class="nav-trigger" in:fly={{ y: 50 }}>
		<button class="nav-trigger-button" on:click>
			<svelte:component this={Menu} />
		</button>
	</div>
</BottomSheetTrigger>

<style>
	.nav-trigger {
		align-items: center;
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border-radius: var(--aho-radii-round);
		bottom: var(--aho-space-xlarge);
		display: flex;
		justify-content: center;
		left: 50%;
		height: 72px;
		position: fixed;
		transform: translate(-50%);
		width: 72px;
		z-index: 4;
	}

	.nav-trigger-button {
		align-items: center;
		background: var(--aho-colors-gradients-brand);
		border: none;
		border-radius: 50%;
		color: rgb(var(--aho-color-grey10));
		cursor: pointer;
		display: flex;
		height: var(--aho-space-5xlarge);
		justify-content: center;
		transition: transform var(--aho-animation-speed-fast) ease;
		width: var(--aho-space-5xlarge);
	}

	.nav-trigger-button:hover {
		transform: scale(var(--aho-scale-large));
	}

	:global(.nav-trigger-button > svg) {
		height: var(--aho-space-xlarge);
		width: var(--aho-space-xlarge);
	}
</style>
