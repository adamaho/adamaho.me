<script lang="ts">
  import Box from "~/components/Box.svelte";

  import * as styles from "./index.css";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Box class={styles.test} atoms={{ fontWeight: "extraBold", backgroundColor: "blue40" }}>
  Hello
</Box>
