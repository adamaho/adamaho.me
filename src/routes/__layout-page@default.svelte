<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	import Nav from '~/components/Nav';
	import PageTransition from '~/lib/components/PageTransition.svelte';

	export let url: URL;
</script>

<PageTransition {url}>
	<main class="site-layout">
		<slot />
	</main>
</PageTransition>
<Nav />

<style>
	.site-layout {
		display: flex;
		flex-direction: column;
		height: 100%;
		margin: 0 auto;
		max-width: 720px;
		min-height: 100vh;
		min-height: -webkit-fill-available;
		padding: var(--aho-space-6xlarge) var(--aho-space-large);
	}

	@media screen and (min-width: 640px) {
		.site-layout {
			padding: var(--aho-space-7xlarge) var(--aho-space-large);
		}
	}
</style>
