<button class="nav-trigger" on:click>
	<slot />
</button>

<style>
	.nav-trigger {
		background: var(--aho-colors-gradients-brand);
		border: none;
		border-radius: 50%;
		bottom: var(--aho-space-xlarge);
		height: var(--aho-space-5xlarge);
		left: 50%;
		position: fixed;
		transform: translate(-50%);
		transition: transform var(--aho-animation-speed-fast) ease;
		width: var(--aho-space-5xlarge);
	}

	.nav-trigger:hover {
		transform: translate(-50%) scale(var(--aho-scale-large));
	}
</style>
