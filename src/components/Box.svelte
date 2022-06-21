<script lang="ts">
  import { atoms as _atoms } from "~/styles/atoms.css";
  import type { Atoms } from "~/styles/atoms.css";

  export let as: string = "div";

  export let atoms: Atoms;

  let className: string | undefined = undefined;
  export {className as class};
</script>

<svelte:element this={as} class={`${className} ${_atoms(atoms)}`} {...$$restProps}>
  <slot />
</svelte:element>