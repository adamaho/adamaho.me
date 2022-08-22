<script lang="ts">
	import { lightswitch } from '~/stores/lightswitch';

	import LightSwitch from '~/components/LightSwitch.svelte';
</script>

<div class="writing-page" class:lightswitch-on={$lightswitch}>
	<LightSwitch />
	<slot />
</div>

<style>
	.writing-page {
		position: relative;
		opacity: 0.2;
		padding-bottom: var(--aho-space-7xlarge);
		transition: opacity var(--aho-animation-speed-fast) ease;
		z-index: 3;
	}

	.writing-page.lightswitch-on {
		opacity: 1;
	}
</style>
