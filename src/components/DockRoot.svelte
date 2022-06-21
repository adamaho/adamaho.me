<script lang="ts">
  import Box from "~/components/Box.svelte";

  import * as styles from "./DockRoot.css";
</script>

<Box class={styles.dock}>
  <slot />
</Box>