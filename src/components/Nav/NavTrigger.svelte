<script lang="ts">
	import ArrowUp from '~/lib/components/Icons/ArrowUp.svelte';
</script>

<button class="nav-trigger" on:click>
	<svelte:component this={ArrowUp} />
</button>

<style>
	.nav-trigger {
		align-items: center;
		background: var(--aho-colors-gradients-brand);
		border: none;
		border-radius: 50%;
		bottom: var(--aho-space-xlarge);
		color: rgb(var(--aho-color-grey10));
		cursor: pointer;
		display: flex;
		height: var(--aho-space-5xlarge);
		justify-content: center;
		left: 50%;
		position: fixed;
		transform: translate(-50%);
		transition: transform var(--aho-animation-speed-fast) ease;
		width: var(--aho-space-5xlarge);
	}

	.nav-trigger:hover {
		transform: translate(-50%) scale(var(--aho-scale-large));
	}

	:global(.nav-trigger > svg) {
		height: var(--aho-space-xlarge);
		width: var(--aho-space-xlarge);
	}
</style>
