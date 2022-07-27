<script lang="ts">
	import ProsAndConsCard from './ProsAndConsCard.svelte';
	import { Times, Check } from '~/lib/components/Icons';

	export let pros: string[] = [];
	export let cons: string[] = [];
</script>

<div class="pros-and-cons">
	<ProsAndConsCard type="pro">
		<svelte:fragment slot="icon">
			<Check />
		</svelte:fragment>
		<svelte:fragment slot="title">Pro's</svelte:fragment>
		{#each pros as pro}
			<li class="pros-and-cons-item">{pro}</li>
		{/each}
	</ProsAndConsCard>
	<ProsAndConsCard type="con">
		<svelte:fragment slot="icon">
			<Times />
		</svelte:fragment>
		<svelte:fragment slot="title">Cons's</svelte:fragment>
		{#each cons as con}
			<li class="pros-and-cons-item">{con}</li>
		{/each}
	</ProsAndConsCard>
</div>

<style>
	.pros-and-cons {
		display: flex;
		flex-direction: column;
		gap: var(--aho-space-large);
		margin-top: var(--aho-space-large);
	}
</style>
