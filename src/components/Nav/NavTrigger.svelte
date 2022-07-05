<button class="nav-trigger" on:click />

<style>
	.nav-trigger {
		background: linear-gradient(
			to bottom right,
			rgb(var(--aho-colors-brand-primary)),
			rgb(var(--aho-colors-brand-secondary))
		);
		border: none;
		border-radius: 50%;
		bottom: var(--aho-space-xlarge);
		height: var(--aho-space-5xlarge);
		left: 50%;
		position: fixed;
		transform: translate(-50%);
		transition: border-radius var(--aho-animation-speed-fast) ease;
		width: var(--aho-space-5xlarge);
	}

	.nav-trigger:hover {
		border-radius: var(--aho-radii-large);
	}
</style>
