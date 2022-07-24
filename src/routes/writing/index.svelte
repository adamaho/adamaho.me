<script lang="ts">
	import PageHeading from '~/components/PageHeading.svelte';
	import WritingPreview from '~/components/WritingPreview.svelte';
</script>

<PageHeading title="Writing">
	<svelte:fragment slot="description">A collection of words</svelte:fragment>
</PageHeading>

<div class="writing-list">
	<WritingPreview
		date={new Date(2022, 6, 24)}
		href="/writing/atomic-css-with-vanilla-extract"
		title="Atomic CSS with Vanilla Extract"
		snippet="This is a thing that is cool"
	/>
</div>

<style>
	.writing-list {
		display: flex;
		flex-direction: column;
		gap: var(--aho-space-medium);
	}
</style>
