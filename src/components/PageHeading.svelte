<script lang="ts">
	export let title = '';
	export let tabTitle = '';
</script>

<svelte:head>
	<title>Adam Aho - {tabTitle}</title>
</svelte:head>

<h1>
	{title}
</h1>
<p>
	<slot name="description" />
</p>
<hr class="separator" />
