<script lang="ts">
	import { lightswitch } from '~/stores/lightswitch';

	import PageHeading from '~/components/PageHeading.svelte';
</script>

<div class="writing-page" class:lightswitch-on={$lightswitch}>
	<PageHeading>
		<svelte:fragment slot="title">Writing</svelte:fragment>
		<svelte:fragment slot="description">A place to write things</svelte:fragment>
	</PageHeading>
</div>

<style>
	.writing-page {
		opacity: 0.2;
		transition: opacity var(--aho-animation-speed-fast) ease;
	}

	.writing-page.lightswitch-on {
		opacity: 1;
	}
</style>
