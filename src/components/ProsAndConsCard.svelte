<script lang="ts">
	export let type: 'pro' | 'con' = 'pro';
</script>

<div class="pros-and-cons-card">
	<div class="pros-and-cons-card-header">
		<span
			class="pros-and-cons-card-icon"
			class:pros-and-cons-card-icon-pro={type === 'pro'}
			class:pros-and-cons-card-icon-con={type === 'con'}
		>
			<slot name="icon" />
		</span>
		<h3 class="pros-and-cons-card-title">
			<slot name="title" />
		</h3>
	</div>
	<ul class="pros-and-cons-card-list">
		<slot />
	</ul>
</div>

<style>
	.pros-and-cons-card {
		background-color: rgba(var(--aho-colors-background-widget), 0.2);
		border: var(--aho-border-width-1) solid rgb(var(--aho-colors-background-widget));
		border-radius: var(--aho-radii-large);
		flex: 1;
		padding: var(--aho-space-large);
	}

	.pros-and-cons-card-header {
		align-items: center;
		display: flex;
		gap: var(--aho-space-smedium);
	}

	.pros-and-cons-card-icon {
		height: var(--aho-space-xlarge);
		width: var(--aho-space-xlarge);
	}

	.pros-and-cons-card-icon-pro {
		color: rgb(var(--aho-color-green80));
	}

	:global(html[data-theme='dark'] .pros-and-cons-card-icon-pro) {
		color: rgb(var(--aho-color-green40));
	}

	.pros-and-cons-card-icon-con {
		color: rgb(var(--aho-color-red80));
	}

	:global(html[data-theme='dark'] .pros-and-cons-card-icon-con) {
		color: rgb(var(--aho-color-red50));
	}

	:global(.pros-and-cons-card-icon > svg) {
		height: 100%;
		width: 100%;
	}

	.pros-and-cons-card-list {
		padding-left: var(--aho-space-xlarge);
	}
</style>
