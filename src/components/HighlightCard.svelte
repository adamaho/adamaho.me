<div class="highlight-card">
	<div class="highlight-card-header">
		<span class="highlight-card-icon">
			<slot name="icon" />
		</span>
		<h3 class="highlight-card-title">
			<slot name="title" />
		</h3>
	</div>
	<p class="highlight-card-description">
		<slot />
	</p>
</div>

<style>
	.highlight-card {
		background-color: rgba(var(--aho-colors-brand-primary), 0.03);
		border: var(--aho-border-width-1) solid rgba(var(--aho-colors-brand-primary), 0.2);
		border-radius: var(--aho-radii-large);
		padding: var(--aho-space-large);
	}

	.highlight-card-title {
		margin-top: 0;
	}

	.highlight-card-header {
		align-items: center;
		display: flex;
		gap: var(--aho-space-small);
	}

	.highlight-card-icon {
		color: var(--aho-colors-heading-default);
		height: var(--aho-space-large);
		width: var(--aho-space-large);
	}

	:global(.highlight-card-icon > svg) {
		height: 100%;
		width: 100%;
	}

	.highlight-card-description {
		padding-left: var(--aho-space-2xlarge);
		margin: 0;
		margin-top: var(--aho-space-small);
	}
</style>
