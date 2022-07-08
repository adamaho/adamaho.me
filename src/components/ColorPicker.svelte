<script lang="ts">
	export let colors: string[];

	let value: string;
</script>

{#each colors as color}
	<input bind:value={color} type="radio" />
{/each}

<style>
</style>
