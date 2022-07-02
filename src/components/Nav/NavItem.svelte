<script lang="ts">
	export let href: string;
</script>

<a {href}>
	<slot name="icon" />
	<slot />
	<slot name="shortcut" />
</a>
