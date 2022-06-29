import { style, keyframes } from '@vanilla-extract/css';
import { atoms } from '~/styles/atoms.css';
import { breakpoints } from '~/styles/queries';
import { baseVars } from '~/styles/vars.css';

const flyUp = keyframes({
	'0%': {
		opacity: '1',
		transform: 'translateY(0px)'
	},
	'50%': {
		opacity: '1',
		transform: 'translateY(10px)'
	},
	'100%': {
		opacity: '0',
		transform: 'translateY(-50px)'
	}
});

const flyDown = keyframes({
	'0%': {
		opacity: '1',
		transform: 'translateY(0px)'
	},
	'50%': {
		opacity: '1',
		transform: 'translateY(-10px)'
	},
	'100%': {
		opacity: '0',
		transform: 'translateY(50px)'
	}
});

export const welcome = style([
	atoms({
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		height: 'full',
		justifyContent: 'center',
		gap: '12',
		paddingTop: '12',
		paddingBottom: '13'
	}),
	{
		minHeight: '100vh'
	}
]);

export const welomeHeadingOut = style({
	animationName: flyUp,
	animationDuration: baseVars.animationSpeed.medium,
	animationFillMode: 'forwards',
	animationTimingFunction: 'ease-out'
});

export const welcomeHeading = style([
	atoms({
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		gap: '3',
		width: 'full'
	})
]);

export const welcomeUnlock = style([
	atoms({
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		gap: '6',
		width: 'full'
	})
]);

export const welomeUnlockOut = style({
	animationName: flyDown,
	animationDuration: baseVars.animationSpeed.medium,
	animationFillMode: 'forwards',
	animationTimingFunction: 'ease-out'
});

export const shortcut = style([
	atoms({
		alignItems: 'center',
		display: 'none',
		gap: '4'
	}),
	{
		'@media': {
			[breakpoints.sm]: {
				display: 'flex'
			}
		}
	}
]);
