<script lang="ts">
	import ArrowLeft from '~/lib/components/Icons/ArrowLeft.svelte';

	export let href: string;
</script>

<a class="go-back" {href}>
	<div class="go-back-icon">
		<ArrowLeft />
	</div>
	<span class="go-back-text">Go back</span>
</a>

<style>
	.go-back {
		align-items: center;
		border-bottom: none;
		display: inline-flex;
		gap: var(--aho-space-small);
		margin-bottom: var(--aho-space-small);
		opacity: 0.7;
	}

	.go-back:hover {
		opacity: 1;
	}

	.go-back-text {
		color: rgb(var(--aho-colors-brand-primary));
	}

	.go-back-icon {
		align-items: center;
		display: flex;
		justify-content: center;
		color: rgb(var(--aho-colors-brand-primary));
		height: var(--aho-space-medium);
		width: var(--aho-space-medium);
	}
</style>
