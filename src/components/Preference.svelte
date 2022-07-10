<script lang="ts">
</script>

<div class="preference">
	<div class="preference-info">
		<h3 class="preference-title">
			<slot name="title" />
		</h3>
		<p class="preference-description">
			<slot name="description" />
		</p>
	</div>
	<slot />
</div>

<style>
	.preference {
		align-items: flex-start;
		border-bottom: var(--aho-border-width-1) solid var(--aho-colors-border-subtle);
		display: flex;
		flex-direction: column;
		gap: var(--aho-space-large);
		justify-content: space-between;
		padding: var(--aho-space-large) 0;
		width: 100%;
	}

	.preference:last-child {
		border: 0;
	}

	.preference-info {
		display: flex;
		flex-direction: column;
		gap: var(--aho-space-xsmall);
	}

	.preference-title {
		font-size: var(--aho-font-size-smedium);
		font-weight: var(--aho-font-weight-bold);
	}

	.preference-description {
		color: var(--aho-colors-text-default);
		font-size: var(--aho-font-size-smedium);
		margin: 0;
	}

	@media screen and (min-width: 640px) {
		.preference {
			align-items: center;
			flex-direction: row;
		}
	}
</style>
