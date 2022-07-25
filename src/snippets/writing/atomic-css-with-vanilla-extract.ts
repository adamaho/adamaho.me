export const snippets = {
	button: `<button on:click>Hello World</button>`.trim(),
	style: `
import { style } from "@vanilla-extract/css";

export const button = style({
    backgroundColor: "red"
});
    `.trim(),
	buttonWithStyle: `
<script>
    import * as styles from "./button.css";
</script>

<button on:click class={styles.button}>Hello World</button>
    `.trim()
};
