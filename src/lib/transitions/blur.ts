import { linear } from 'svelte/easing';

/**
 * Define a custom blur animation
 */
export default function blur(_node: HTMLElement, { duration = 300 }: { duration?: number }) {
	return {
		duration,
		css: (t: number) => {
			const l = linear(t);
			return `
                backdrop-filter: blur(${l * 5}px);
                -webkit-backdrop-filter: blur(${l * 5}px);
                background-color: rgba(var(--aho-colors-background-site), ${l * 0.5})`;
		}
	};
}
