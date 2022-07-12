<script lang="ts">
	import PageHeading from '~/components/PageHeading.svelte';
</script>

<PageHeading>
	<svelte:fragment slot="title">Adam Aho</svelte:fragment>
	<svelte:fragment slot="description">Design System Engineer</svelte:fragment>
</PageHeading>

<hr class="separator" />

<p class="shpeel">
	Currently ending cyber risk at <a href="https://arcticwolf.com" target="_blank">Arctic Wolf</a>.
	Previously at <a href="https://ottomotors.com" target="_blank">OTTO Motors</a>.
</p>

<p class="shpeel">
	Playing around with rust and react-native while working on <a
		href="https://apps.apple.com/lv/app/tallii/id1602920349"
		target="_blank">Tallii</a
	>.
</p>

<style>
	.shpeel {
		line-height: 2;
	}
</style>
