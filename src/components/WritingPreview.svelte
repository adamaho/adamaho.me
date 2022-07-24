<script lang="ts">
	import dayjs from 'dayjs';

	import ArrowRight from '~/lib/components/Icons/ArrowRight.svelte';

	export let date: Date;
	export let href: string;
	export let title: string;
	export let snippet: string;
</script>

<a class="writing-preview" {href}>
	<p class="writing-preview-date">
		{dayjs(date).format('MMMM DD, YYYY')}
	</p>
	<h2 class="writing-preview-title">
		{title}
	</h2>
	<p class="writing-preview-snippet">
		{snippet}
	</p>
	<div class="writing-preview-read-more">
		<span class="writing-preview-read-more-text">Read more</span>
		<div class="writing-preview-read-more-icon">
			<ArrowRight />
		</div>
	</div>
</a>

<style>
	.writing-preview {
		border-bottom: none;
		border-radius: var(--aho-radii-large);
		display: flex;
		flex-direction: column;
		gap: var(--aho-space-small);
		padding: var(--aho-space-smedium);
		margin: 0 calc(var(--aho-space-smedium) * -1);
		transition: background-color var(--aho-animation-speed-medium) ease;
	}

	.writing-preview:hover {
		background-color: rgba(var(--aho-colors-background-widget), 0.2);
	}

	.writing-preview-date {
		margin: 0;
		font-size: var(--aho-font-size-smedium);
	}

	.writing-preview-title {
		font-size: var(--aho-font-size-large);
		margin: 0;
	}

	.writing-preview-snippet {
		margin: 0;
	}

	.writing-preview-read-more {
		align-items: center;
		display: flex;
		gap: var(--aho-space-small);
	}

	.writing-preview-read-more-text {
		color: rgb(var(--aho-colors-brand-primary));
	}

	.writing-preview-read-more-icon {
		align-items: center;
		display: flex;
		justify-content: center;
		color: rgb(var(--aho-colors-brand-primary));
		height: var(--aho-space-medium);
		width: var(--aho-space-medium);
	}

	:global(.writing-preview-read-more-icon > svg) {
		height: 100%;
		width: 100%;
	}
</style>
