<script lang="ts">
	import { theme } from '~/stores/theme';

	let value = $theme.theme;

	$: {
		theme.setTheme(value);
	}
</script>

<h1>Settings</h1>

<select bind:value>
	<option value="light">light</option>
	<option value="dark">dark</option>
</select>
