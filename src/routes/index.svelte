<script lang="ts">
    import cx from "clsx";

    import { goto } from "$app/navigation";
	import ShortcutKey from '~/components/ShortcutKey.svelte';
	import SlideToUnlock from '~/components/SlideToUnlock.svelte';
	import Text from '~/components/Text.svelte';

	import * as styles from './index.css';

    let isUnlocked = false;

    function handleUnlock() {
        isUnlocked = true;
    }

    function handleAnimationEnd() {
        goto("/home");
    }
</script>

<div class={styles.welcome} on:animationend={handleAnimationEnd}>
	<div class={cx(styles.welcomeHeading, {[styles.welomeHeadingOut]: isUnlocked })}>
		<Text as="h1">welcome</Text>
		<Text>thanks for stopping by 😀</Text>
	</div>
	<div class={cx(styles.welcomeUnlock, {[styles.welomeUnlockOut]: isUnlocked })}>
		<SlideToUnlock on:unlock={handleUnlock} />
		<div class={styles.shortcut}>
			<ShortcutKey />
			<ShortcutKey>enter</ShortcutKey>
		</div>
	</div>
</div>
