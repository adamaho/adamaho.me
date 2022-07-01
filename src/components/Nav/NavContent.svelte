<div class="nav-sheet-container">
	<slot />
</div>

<style>
	.nav-sheet-container {
		background: linear-gradient(
			to bottom right,
			rgb(var(--aho-colors-brand-primary)),
			rgb(var(--aho-colors-brand-secondary))
		);
		border-radius: var(--aho-radii-large);
		height: 240px;
		width: 100%;
	}
</style>
