<div class="highlight-card-group">
	<slot />
</div>

<style>
	.highlight-card-group {
		display: grid;
		gap: var(--aho-space-large);
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		margin-top: var(--aho-space-large);
	}

	@media screen and (min-width: 640px) {
		.highlight-card-group {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
