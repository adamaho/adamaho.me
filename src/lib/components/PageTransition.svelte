<script lang="ts">
	import { fly } from 'svelte/transition';

	export let url: URL;
</script>

{#key url}
	<div
		in:fly={{ y: -10, duration: 200, delay: 300 }}
		out:fly={{ y: 0, duration: 200 }}
		class="page"
	>
		<slot />
	</div>
{/key}

<style>
	.page {
		height: 100%;
	}
</style>
