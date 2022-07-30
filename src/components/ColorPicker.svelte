<script lang="ts">
	import { ColorVars } from '~/stores/theme';

	export let colors: { color: string; name: string }[];
	export let cssVar: string;
	export let defaultColor: string;
	export let name: keyof typeof ColorVars;

	let colorPickerEl: HTMLElement;
	let colorEls: { [key: string]: HTMLElement } = {};
	let value = getColorFromLocalStorage();
	let cursorX = 0;

	/**
	 * Saves the color setting to local storage
	 * @param color
	 */
	function saveColorToLocalStorage(color: string) {
		localStorage.setItem(ColorVars[name], color);
	}

	/**
	 * Gets the color from local storage if it exits else it returns the defaultColor
	 */
	function getColorFromLocalStorage() {
		return localStorage.getItem(ColorVars[name]) || defaultColor;
	}

	$: {
		let root = document.documentElement;
		let color = colorEls[value];

		if (colorPickerEl && root && color) {
			cursorX =
				color.getBoundingClientRect().left - colorPickerEl.getBoundingClientRect().left;
			root.style.setProperty(cssVar, `var(${value})`);
			saveColorToLocalStorage(value);
		}
	}
</script>

<div class="color-picker" bind:this={colorPickerEl}>
	<form>
		<div class="color-picker-items">
			{#each colors as color}
				<label for={color.name} aria-label={color.name}>
					<input
						id={color.name}
						type="radio"
						value={color.color}
						bind:group={value}
						{name}
						class="color-input"
					/>
					<div
						bind:this={colorEls[color.color]}
						style={`background-color: rgb(var(${color.color}))`}
						class="color-bubble"
					/>
				</label>
			{/each}
		</div>
	</form>
	<div
		class="color-picker-cursor"
		style={`box-shadow: 0 0 0 5px rgba(var(${value}), 0.4); left: ${cursorX}px;`}
	/>
</div>

<style>
	.color-picker {
		position: relative;
	}

	.color-picker-items {
		align-items: center;
		display: flex;
		gap: var(--aho-space-medium);
	}

	.color-input {
		position: absolute;
		opacity: 0;
		top: -9999px;
		left: -9999px;
	}

	.color-bubble {
		border-radius: var(--aho-space-large);
		height: var(--aho-space-large);
		width: var(--aho-space-large);
	}

	.color-picker-cursor {
		border-radius: var(--aho-space-xlarge);
		box-shadow: 0 0 0 var(--aho-border-width-3) rgb(var(--aho-color-blue50));
		height: var(--aho-space-large);
		position: absolute;
		top: 0px;
		transition: left var(--aho-animation-speed-fast) ease,
			top var(--aho-animation-speed-fast) ease,
			box-shadow var(--aho-animation-speed-fast) ease;
		width: var(--aho-space-large);
	}
</style>
