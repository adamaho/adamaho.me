import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';

import {
	animationSpeed,
	colors,
	radii,
	borderWidth,
	scale,
	space,
	fontFamily,
	fontSize,
	fontWeight
} from './tokens';

export const baseVars = createGlobalThemeContract(
	{
		animationSpeed,
		borderWidth,
		color: colors(),
		fontFamily,
		fontSize,
		fontWeight,
		radii,
		scale,
		space
	},
	(_value, path) => `aho-${path.join('-')}`.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())
);

createGlobalTheme(':root', baseVars, {
	animationSpeed,
	borderWidth,
	color: colors(),
	fontFamily,
	fontSize,
	fontWeight,
	radii,
	scale,
	space
});

export const theme = createGlobalThemeContract(
	{
		colors: {
			brand: {
				primary: ''
			},
			background: {
				site: '',
				bottomSheet: ''
			},
			border: {
				subtle: ''
			},
			heading: {
				default: ''
			},
			text: {
				default: ''
			}
		}
	},
	(_value, path) => `aho-${path.join('-')}`.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())
);

createGlobalTheme('html[data-theme="dark"]', theme, {
	colors: {
		brand: {
			primary: `rgb(${baseVars.color.blue40})`
		},
		background: {
			site: `rgb(${baseVars.color.grey100})`,
			bottomSheet: `rgba(${baseVars.color.grey40}, 0.04)`
		},
		border: {
			subtle: `rgb(${baseVars.color.grey80})`
		},
		heading: {
			default: `rgb(${baseVars.color.grey10})`
		},
		text: {
			default: `rgb(${baseVars.color.grey40})`
		}
	}
});

createGlobalTheme('html[data-theme="light"]', theme, {
	colors: {
		brand: {
			primary: `rgb(${baseVars.color.blue40})`
		},
		background: {
			site: `rgb(${baseVars.color.grey10})`,
			bottomSheet: `rgba(${baseVars.color.grey20}, 0.05)`
		},
		border: {
			subtle: `rgb(${baseVars.color.grey30})`
		},
		heading: {
			default: `rgb(${baseVars.color.grey100})`
		},
		text: {
			default: `rgb(${baseVars.color.grey80})`
		}
	}
});
