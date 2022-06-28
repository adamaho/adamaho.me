<!-- 1. Assign current route's path to `pathname` prop -->
<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit"

    export const load: Load = async ({ url: {pathname} }) => ({
      props: { pathname },
    });
  </script>

<script lang="ts">
	import { onMount } from 'svelte';

	import PageTransition from '~/components/PageTransition.svelte';

	import { theme } from '~/stores/theme';

	import '~/styles/global.css.ts';

	import * as styles from './layout.css';

    export let pathname: string = "";

	onMount(() => {
		// init the theme on mount
		theme.initTheme();
	});
</script>

{#if $theme.hasInitialized}
	<PageTransition pathname={pathname} class={styles.layout}>
		<slot />
	</PageTransition>
{/if}
