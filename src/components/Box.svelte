<script lang="ts">
  import cx from "clsx";

  import { atoms as _atoms } from "~/styles/atoms.css";
  import type { Atoms } from "~/styles/atoms.css";

  export let as: string = "div";

  export let atoms: Atoms | undefined = undefined;

  let className: string | undefined = "";
  export {className as class};
</script>

<svelte:element this={as} class={cx(className, atoms && _atoms(atoms))} {...$$restProps}>
  <slot />
</svelte:element>