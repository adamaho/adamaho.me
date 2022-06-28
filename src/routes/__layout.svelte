<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import PageTransition from '~/components/PageTransition.svelte';

	import { theme } from '~/stores/theme';

	import '~/styles/global.css.ts';

	import * as styles from './layout.css';

	onMount(() => {
		// init the theme on mount
		theme.initTheme();
	});
</script>

{#if $theme.hasInitialized}
	<PageTransition url={$page.url} class={styles.layout}>
		<slot />
	</PageTransition>
{/if}
