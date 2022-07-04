import { expoOut } from 'svelte/easing';

/**
 * Define a custom bottom sheet animation
 */
export default function sheet(
	_node: HTMLElement,
	{ duration = 300, initialY = 100 }: { duration?: number; initialY?: number }
) {
	return {
		duration,
		css: (t: number) => {
			const eased = expoOut(t);
			return `transform: translate(-50%, -${eased * initialY}%);`;
		}
	};
}
