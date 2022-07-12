<script lang="ts">
	import { fade } from 'svelte/transition';

	export let url: URL;
</script>

{#key url}
	<div in:fade={{ duration: 200, delay: 300 }} out:fade={{ duration: 200 }} class="page">
		<slot />
	</div>
{/key}

<style>
	.page {
		height: 100%;
	}
</style>
