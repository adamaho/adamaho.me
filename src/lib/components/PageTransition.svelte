<!-- <script lang="ts">
	import cx from 'clsx';

	import { fly } from 'svelte/transition';

	export let pathname: string;

	let className: string = '';
	export { className as class };
</script>

{#key pathname}
	<div
		in:fly={{ y: -25, duration: 250, delay: 300 }}
		out:fly={{ y: 0, duration: 250 }}
		class={cx(className)}
	>
		<slot />
	</div>
{/key} -->
