<script lang="ts">
	export let href: string;
</script>

<a {href} class="nav-item" on:click>
	<slot name="shortcut" />
	<div class="nav-item-icon">
		<slot name="icon" />
	</div>
	<span class="nav-item-text">
		<slot />
	</span>
</a>

<style>
	.nav-item {
		background-color: rgba(var(--aho-color-grey10), 0.5);
		border-radius: var(--aho-radii-medium);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: var(--aho-space-xsmall);
		text-decoration: none;
		width: 100%;
	}

	.nav-item-text {
		color: rgb(var(--aho-color-grey90));
	}
</style>
