<script lang="ts">
	import SlideToUnlock from '~/components/SlideToUnlock.svelte';
</script>

<div class="center">
	<SlideToUnlock on:unlock={() => console.log('unlocked')} />
</div>

<style>
	.center {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
</style>
