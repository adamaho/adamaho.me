import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';

import {
	animationSpeed,
	borderWidth,
	colors,
	fontFamily,
	fontSize,
	fontWeight,
	radii,
	scale,
	space
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
				primary: '',
				secondary: ''
			},
			background: {
				site: ''
			},
			border: {
				subtle: ''
			},
			gradients: {
				brand: ''
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
			primary: baseVars.color.blue40,
			secondary: baseVars.color.purple50
		},
		background: {
			site: baseVars.color.grey100
		},
		border: {
			subtle: `rgb(${baseVars.color.grey80})`
		},
		gradients: {
			brand: `linear-gradient(
                to bottom right,
                rgb(${theme.colors.brand.primary}),
                rgb(${theme.colors.brand.secondary})
            );`
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
			primary: baseVars.color.blue40,
			secondary: baseVars.color.purple50
		},
		background: {
			site: baseVars.color.grey10
		},
		border: {
			subtle: `rgb(${baseVars.color.grey30})`
		},
		gradients: {
			brand: `linear-gradient(
                to bottom right,
                rgb(${theme.colors.brand.primary}),
                rgb(${theme.colors.brand.secondary})
            );`
		},
		heading: {
			default: `rgb(${baseVars.color.grey100})`
		},
		text: {
			default: `rgb(${baseVars.color.grey80})`
		}
	}
});
