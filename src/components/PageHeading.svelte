<script lang="ts">
	export let title = '';
</script>

<svelte:head>
	<title>Adam Aho - {title}</title>
</svelte:head>

<h1>
	{title}
</h1>
<p>
	<slot name="description" />
</p>
<hr class="separator" />
