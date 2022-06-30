import { style, keyframes } from '@vanilla-extract/css';
import { baseVars } from '~/styles/vars.css';



export const shortcut = style([
	atoms({
		alignItems: 'center',
		gap: '4'
	}),
	{
		display: 'none',
		'@media': {
			[breakpoints.sm]: {
				display: 'flex'
			}
		}
	}
]);
