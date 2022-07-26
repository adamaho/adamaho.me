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
		href="/writing/type-safe-atomic-css"
		title="Type-Safe Atomic CSS"
		snippet="As frontend developers, we have to constantly keep up with the times and innovations in our space. One of the innovations that has come in the last couple years is CSS-in-JS. It has completely changed the way that we work with CSS in our projects. Specifically, React projects."
	/>
</div>

<style>
	.writing-list {
		display: flex;
		flex-direction: column;
		gap: var(--aho-space-medium);
	}
</style>
