<script lang="ts">
  import Box from "~/components/Box.svelte";
  import DockRoot from "~/components/DockRoot.svelte";
  import DockItem from "~/components/DockItem.svelte";
</script>

<Box atoms={{ alignItems: "center", display: "flex", height: "full", justifyContent: "center" }}>
  <DockRoot>
    <DockItem />
    <DockItem />
    <DockItem />
  </DockRoot>
</Box>