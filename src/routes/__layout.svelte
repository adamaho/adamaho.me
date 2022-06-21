<script lang="ts">
  import { onMount } from "svelte";

  import Box from "~/components/Box.svelte";
  import DockRoot from "~/components/DockRoot.svelte";
  
  import { theme, Theme } from "~/stores/theme";
  
  import "~/styles/global.css.ts";

  onMount(() => {
    // init the theme on mount
    theme.initTheme();
  });

</script>

<DockRoot>
  <Box atoms={{ backgroundColor: "grey100", height: "10", width: "10" }} />
  <button on:click={() => $theme.theme === "light" ? theme.setTheme(Theme.Dark) : theme.setTheme(Theme.Light)}>toggle theme</button>
  <div>2</div>
  <div>3</div>
</DockRoot>

{#if $theme.hasInitialized}
  <slot />
{/if}