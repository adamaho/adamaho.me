<script lang="ts">
    import { goto } from "$app/navigation";
	import ShortcutKey from '~/components/ShortcutKey.svelte';
	import SlideToUnlock from '~/components/SlideToUnlock.svelte';
	import Text from '~/components/Text.svelte';

	import * as styles from './index.css';

    function handleUnlock() {
        goto("/home");
    }
</script>

<div class={styles.welcome}>
	<div class={styles.welcomeHeading}>
		<Text as="h1">welcome</Text>
		<Text>thanks for stopping by 😀</Text>
	</div>
	<div class={styles.welcomeUnlock}>
		<SlideToUnlock on:unlock={handleUnlock} />
		<div class={styles.shortcut}>
			<ShortcutKey />
			<ShortcutKey>U</ShortcutKey>
		</div>
	</div>
</div>
