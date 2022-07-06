<div class="nav-sheet-container">
	<div class="nav-sheet-header">
		<div class="nav-sheet-header-thumb" />
	</div>
	<div class="nav-sheet-items">
		<slot />
	</div>
</div>

<style>
	.nav-sheet-container {
		background: var(--aho-colors-gradients-brand);
		border-radius: var(--aho-radii-large);
		width: 100%;
	}

	.nav-sheet-header {
		align-items: center;
		display: flex;
		justify-content: center;
		padding: var(--aho-space-small) 0;
	}

	.nav-sheet-header-thumb {
		background-color: rgba(var(--aho-color-grey10), 0.3);
		border-radius: var(--aho-space-small);
		height: var(--aho-space-small);
		width: var(--aho-space-5xlarge);
	}

	.nav-sheet-items {
		display: grid;
		gap: var(--aho-space-small);
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto;
		padding: var(--aho-space-small);
		padding-top: 0;
	}

	@media screen and (min-width: 640px) {
		.nav-sheet-header {
			padding: var(--aho-space-xsmall);
		}

		.nav-sheet-header-thumb {
			display: none;
		}

		.nav-sheet-items {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
