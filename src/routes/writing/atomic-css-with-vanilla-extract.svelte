<script lang="ts">
	import dayjs from 'dayjs';

	import PageHeading from '~/components/PageHeading.svelte';
</script>

<PageHeading title="Atomic CSS with Vanilla Extract">
	<svelte:fragment slot="description"
		>{dayjs(new Date(2022, 6, 24)).format('MMMM DD, YYYY')}</svelte:fragment
	>
</PageHeading>

<p>this is a really cool thing</p>

<p>hey what is going on?</p>
