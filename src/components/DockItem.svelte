<script lang="ts">
  import Box from "./Box.svelte";

  import * as styles from "./DockItem.css";
</script>

<Box class={styles.dockItem}>
  <slot />
</Box>