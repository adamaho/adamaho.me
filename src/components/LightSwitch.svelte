<script lang="ts">
	import { fade } from 'svelte/transition';

	import { lightswitch } from '~/stores/lightswitch';
	import { Lightbulb } from '~/lib/components/Icons';
</script>

<div class="lightswitch">
	<div class="lightswitch-cord" />
	<div class="lightswitch-bulb">
		{#if $lightswitch}
			<div class="lightswitch-fade" in:fade={{ duration: 100 }} />
			<div class="lightswitch-light" in:fade={{ duration: 100 }} />
		{/if}
		<svelte:component
			this={Lightbulb}
			filamentColor={$lightswitch ? '--aho-colors-brand-primary' : '--aho-color-grey50'}
			screwColor="--aho-colors-icon-default"
			on:click={lightswitch.toggleLightswitch}
		/>
	</div>
</div>

<style>
	.lightswitch {
		position: absolute;
		top: var(--aho-space-large);
	}

	.lightswitch-cord {
		display: none;
	}

	.lightswitch-bulb {
		align-items: center;
		display: flex;
		height: var(--aho-space-3xlarge);
		justify-content: center;
		position: relative;
		width: var(--aho-space-2xlarge);
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
		height: 2500px;
		position: absolute;
		width: 2500px;
		z-index: -1;
	}

	@media screen and (min-width: 640px) {
		.lightswitch {
			position: fixed;
			top: 80px;
		}
	}

	@media screen and (min-width: 1024px) {
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
			left: 10%;
			transform-origin: top;
			position: fixed;
			top: 0;
			z-index: 1;
		}

		.lightswitch-cord {
			background: rgb(var(--aho-color-grey50));
			display: block;
			height: 130px;
			width: 3px;
		}

		.lightswitch-bulb {
			height: var(--aho-space-4xlarge);
			transform: rotate(180deg);
			width: var(--aho-space-4xlarge);
		}
	}
</style>
