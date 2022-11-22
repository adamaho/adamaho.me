<script lang="ts">
	import PageHeading from '~/components/PageHeading.svelte';
</script>

<PageHeading title="Adam Aho">
	<svelte:fragment slot="description">Design System Engineer</svelte:fragment>
</PageHeading>

<p class="shpeel">
	Currently ending cyber risk at <a href="https://arcticwolf.com" target="_blank">Arctic Wolf</a>.
	Previously at <a href="https://ottomotors.com" target="_blank">OTTO Motors</a>.
</p>

<p class="shpeel">Learning as much as I can about rust for the forseeable future.</p>

<style>
	.shpeel {
		line-height: 2;
	}
</style>
