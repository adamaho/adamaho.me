<script lang="ts">
	import { onMount } from 'svelte';

	import { theme } from '~/stores/theme';

    import '~/styles/global.css';
	import '~/styles/global.css.ts';

	onMount(() => {
		// init the theme on mount
		theme.initTheme();
	});
</script>

{#if $theme.hasInitialized}
    <slot />
{/if}
