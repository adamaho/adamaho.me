<script context="module">
	let counter = 0;
</script>

<script lang="ts">
	export let checked: boolean;

	let id = 'switch_' + counter++;
</script>

<input bind:checked type="checkbox" {id} class="switch-input" />
<label class="switch-toggle" for={id}>
	<div class="switch-thumb" />
</label>

<style>
	.switch-input {
		left: -9990px;
		position: absolute;
		top: -9990px;
	}

	.switch-toggle {
		align-items: center;
		background-color: rgb(var(--aho-colors-background-widget));
		border-radius: var(--aho-radii-round);
		cursor: pointer;
		display: flex;
		padding: var(--aho-space-xxsmall);
		transition: transform var(--aho-animation-speed-fast) ease;
		width: var(--aho-space-4xlarge);
	}

	.switch-toggle:focus {
		box-shadow: 0 0 0 var(--aho-border-width-3) rgb(var(--aho-colors-brand-secondary));
	}

	.switch-toggle:hover {
		transform: scale(var(--aho-scale-large));
	}

	.switch-thumb {
		background-color: rgb(var(--aho-colors-background-site));
		border-radius: var(--aho-radii-round);
		height: var(--aho-space-medium);
		transition: transform var(--aho-animation-speed-fast) ease;
		width: var(--aho-space-medium);
	}

	:global(.switch-input:checked + .switch-toggle) {
		background-color: rgb(var(--aho-colors-brand-primary));
	}

	:global(.switch-input:checked + .switch-toggle .switch-thumb) {
		transform: translateX(20px);
	}
</style>
