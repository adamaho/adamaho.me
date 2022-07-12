<script lang="ts">
	import { fade } from 'svelte/transition';

	import { lightbulb } from '~/stores/lightbulb';
	import { Lightbulb } from '~/lib/components/Icons';
</script>

<div class="lightswitch">
	<div class="lightswitch-cord" />
	<div class="lightswitch-bulb">
		{#if $lightbulb}
			<div class="lightswitch-fade" in:fade={{ duration: 100 }} />
			<div class="lightswitch-light" in:fade={{ duration: 100 }} />
		{/if}
		<svelte:component
			this={Lightbulb}
			filamentColor={$lightbulb ? '--aho-colors-brand-primary' : '--aho-color-grey50'}
			on:click={lightbulb.toggleLightbulb}
		/>
	</div>
</div>

<style>
	@keyframes swing {
		0% {
			transform: rotate(-5deg);
		}
		50% {
			transform: rotate(5deg);
		}
		100% {
			transform: rotate(-5deg);
		}
	}

	.lightswitch {
		align-items: center;
		animation-name: swing;
		animation-duration: 5s;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
		display: flex;
		flex-direction: column;
		left: 150px;
		transform-origin: top;
		position: fixed;
		top: 0;
		z-index: 1;
	}

	.lightswitch-cord {
		background: rgb(var(--aho-color-grey50));
		height: 130px;
		width: 3px;
	}

	.lightswitch-bulb {
		align-items: center;
		display: flex;
		height: var(--aho-space-4xlarge);
		justify-content: center;
		position: relative;
		transform: rotate(180deg);
		width: var(--aho-space-4xlarge);
	}

	:global(.lightswitch-bulb > svg) {
		cursor: pointer;
		height: 100%;
		width: 100%;
	}

	.lightswitch-light {
		background: radial-gradient(rgba(var(--aho-colors-brand-primary), 0.15), transparent 50%);
		border-radius: var(--aho-radii-round);
		height: 600px;
		position: absolute;
		width: 600px;
		z-index: -1;
	}

	.lightswitch-fade {
		background: radial-gradient(rgba(var(--aho-colors-brand-primary), 0.1), transparent 70%);
		border-radius: var(--aho-radii-round);
		height: 2000px;
		position: absolute;
		width: 2000px;
		z-index: -1;
	}
</style>
