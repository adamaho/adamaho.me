export const snippets = {
	button: `<button on:click>Hello World</button>`,
	style: `
import { style } from "@vanilla-extract/css";

export const button = style({
    backgroundColor: "red"
});
    `,
	buttonWithStyle: `
<script>
    import * as styles from "./button.css";
</script>

<button on:click class={styles.button}>Hello World</button>
    `,
	buttonWithSprinkles: `
<script>
    import {sprinkles} from "./sprinkles.css";
</script>

<button
    on:click
    class={sprinkles({backgroundColor: "myBackgroundColor"})}
>
    Hello World
</button>
    `,
	atomicBackground: `
import { globalStyle } from "@vanilla-extract/css";

globalStyle("bg-red", {
    backgroundColor: "red"
});
`,
	atomicTypes: `
import { globalStyle } from "@vanilla-extract/css";
import type { StyleRule } from "@vanilla-extract/css";

type AtomicClassDefinition = {
  [property: string]: StyleRule;
};

type GetKeys<T extends object> = keyof T;

type GetKeysFromArray<Args extends ReadonlyArray<any>> =
  Args extends (infer ElementType)[]
    ? ElementType extends AtomicClassDefinition
      ? GetKeys<ElementType>
      : never
    : never;
`,
	createAtomicFunction: `
const createUtilities = <
    Args extends ReadonlyArray<AtomicClassDefinition>
>(
    ...args: Args
) => {
    let classNameMapping = <{
        [key in GetKeysFromArray<typeof args>]: string
    }>{};

    for (const arg of args) {
        for (const [key, style] of Object.entries(arg)) {
            const className = key;

            classNameMapping[key as GetKeysFromArray<typeof args>] = className;

            globalStyle(\`.\${className}\`, style as StyleRule);
        }
    }
  return classNameMapping;
};
`,
	atomicClassDefinition: `
const classes = createUtilities({
    ["bg-red-10"]: {
        backgroundColor: "#fef2f2"
    },
    ["bg-red-20"]: {
        backgroundColor: "#fee2e2"
    },
    ["bg-red-30"]: {
        backgroundColor: "#fecaca"
    },
    ["bg-red-40"]: {
        backgroundColor: "#fca5a5"
    }
});
`,
	atomicClassFunction: `
type UtilityClasses = keyof typeof classes;

export const utilities = (...utilityClasses: UtilityClasses[]) => {
    return utilityClasses.join(" ");
};
`,
	example: `
<script>
    import {utilties} from "./utilities";
</script>

<button
    on:click
    class={utilities("bg-red-30")}
>
    Hello World
</button>
`
};
