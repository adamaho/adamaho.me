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
		transition: opacity var(--aho-animation-speed-fast) ease;
	}

	.writing-page.lightswitch-on {
		opacity: 1;
	}
</style>
