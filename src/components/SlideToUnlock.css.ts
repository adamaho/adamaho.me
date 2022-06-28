import { style, keyframes } from '@vanilla-extract/css';

import { atoms } from '~/styles/atoms.css';
import { darkMode, lightMode } from '~/styles/queries';
import { baseVars } from '~/styles/vars.css';

const nudge = keyframes({
	'0%': {
		transform: 'translateX(0px)'
	},
	'5%': {
		transform: 'translateX(10px)'
	},
	'10%': {
		transform: 'translateX(0px)'
	},
	'15%': {
		transform: 'translateX(10px)'
	},
	'20%': {
		transform: 'translateX(0px)'
	},
	'100%': {}
});

export const slideToUnlockTrack = style([
	atoms({
		alignItems: 'center',
		borderRadius: '3',
		display: 'flex',
		height: '11',
		justifyContent: 'flex-end',
		padding: '2',
		position: 'relative',
		transitionDuration: 'fast',
		transitionProperty: 'shadow',
		transitionTimingFunction: 'ease'
	}),
	{
		maxWidth: '300px',
		width: '100%',
		selectors: {
			[`${lightMode} &`]: {
				background: `linear-gradient(to right, rgb(${baseVars.color.grey20}), rgb(${baseVars.color.grey10}))`
			},
			[`${darkMode} &`]: {
				background: `linear-gradient(to right, rgb(${baseVars.color.grey90}), rgb(${baseVars.color.grey100}))`,
				boxShadow: `0 0 0 3px rgba(${baseVars.color.grey90}, 0.6)`
			}
		}
	}
]);

export const slideToUnlockTrackActive = style([
	{
		selectors: {
			[`${lightMode} &`]: {
				background: `linear-gradient(to right, rgb(${baseVars.color.grey20}), rgb(${baseVars.color.grey10}))`
			},
			[`${darkMode} &`]: {
				boxShadow: `0 0 0 3px rgba(${baseVars.color.blue40}, 0.6)`
			}
		}
	}
]);

export const slideToUnlockThumbActive = style({
    transform: "scale(1.1)"
});

export const slideToUnlockThumb = style([
	atoms({
		borderWidth: '0',
		height: '10',
		width: '11',
		position: 'absolute',
        transitionDuration: "fast",
        transitionProperty: "transform",
        transitionTimingFunction: "ease"
	}),
	{
		borderRadius: '7px',
		userSelect: 'none',
		WebkitUserSelect: 'none',
		selectors: {
			[`${lightMode} &`]: {},
			[`${darkMode} &`]: {
				backgroundColor: `rgb(${baseVars.color.grey40})`
			},
			[`&:not(${slideToUnlockThumbActive})`]: {
				animationDelay: '5s',
				animationDuration: '3s',
				animationIterationCount: 'infinite',
				animationName: nudge,
				animationTimingFunction: 'linear'
			}
		}
	}
]);

export const slideToUnlockText = style([
	atoms({
		fontSize: '4',
		fontWeight: 'bold',
		marginRight: '11',
		transitionDuration: 'fast',
		transitionTimingFunction: 'ease',
		transitionProperty: 'opacity'
	}),
	{
		opacity: 1,
		selectors: {
			[`${lightMode} &`]: {},
			[`${darkMode} &`]: {
				color: `rgb(${baseVars.color.grey40})`
			}
		}
	}
]);

export const slideToUnlockTextActive = style({
	opacity: 0
});
