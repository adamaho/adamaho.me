<script lang="ts">
	import { onMount } from 'svelte';

	import ShortcutKey from '~/components/ShortcutKey.svelte';
	import SlideToUnlock from '~/components/SlideToUnlock.svelte';
	import Text from "~/components/Text.svelte";

	import * as styles from "./index.css";
</script>

<svelte:body style:overflow="hidden" />

<div class={styles.welcome}>
	<div class={styles.welcomeHeading}>
		<Text as="h1">welcome</Text>
		<Text>thanks for stopping by 😀</Text>
	</div>
	<div class={styles.welcomeUnlock}>
		<SlideToUnlock on:unlock={() => console.log('unlocked')} />
		<div class={styles.shortcut}>
			<ShortcutKey />
			<ShortcutKey>U</ShortcutKey>
		</div>
	</div>
</div>
