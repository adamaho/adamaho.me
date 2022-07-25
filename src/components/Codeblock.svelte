<script lang="ts">
	import Prism from 'svelte-prism';

	export let code: string;
	export let language: 'svelte' | 'javascript' = 'javascript';
</script>

<Prism {language} source={code}>
	<slot />
</Prism>
