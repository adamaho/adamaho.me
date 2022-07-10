<script lang="ts">
	export let colors: string[];
	export let cssVar: string;
	export let defaultColor: string;
	export let name: string;

	const LOCAL_STORAGE_KEY = `${name}Color`;

	let colorPickerEl: HTMLElement;
	let colorEls: { [key: string]: HTMLElement } = {};
	let value = getColorFromLocalStorage();
	let cursorX = 0;

	/**
	 * Saves the color setting to local storage
	 * @param color
	 */
	function saveColorToLocalStorage(color: string) {
		localStorage.setItem(LOCAL_STORAGE_KEY, color);
	}

	/**
	 * Gets the color from local storage if it exits else it returns the defaultColor
	 */
	function getColorFromLocalStorage() {
		return localStorage.getItem(LOCAL_STORAGE_KEY) || defaultColor;
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
				<label>
					<input
						type="radio"
						value={color}
						bind:group={value}
						{name}
						class="color-input"
					/>
					<div
						bind:this={colorEls[color]}
						style={`background-color: rgb(var(${color}))`}
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
		display: none;
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
