<script lang="ts">
  import cx from "clsx";
  import * as styles from "./Text.css";

  export let as: keyof typeof styles.text = "span";
</script>

<svelte:element this={as} class={cx(styles.text[as])}>
  <slot />
</svelte:element>