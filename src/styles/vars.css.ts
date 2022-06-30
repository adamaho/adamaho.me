import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';

import {
	animationSpeed,
	colors,
	radii,
	borderWidths,
	scale,
	space,
	fontFamily,
	fontSize,
	fontWeight
} from './tokens';

export const baseVars = createGlobalThemeContract(
	{
		animationSpeed,
		borderWidths,
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
	borderWidths,
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
				site: ''
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
			site: `rgb(${baseVars.color.grey100})`
		},
		heading: {
			default: `rgb(${baseVars.color.grey10})`
		},
        text: {
            default: `rgb(${baseVars.color.grey30})`
        }
	}
});

createGlobalTheme('html[data-theme="light"]', theme, {
	colors: {
		brand: {
			primary: `rgb(${baseVars.color.blue40})`
		},
		background: {
			site: `rgb(${baseVars.color.grey10})`
		},
		heading: {
			default: `rgb(${baseVars.color.grey100})`
		},
        text: {
            default: `rgb(${baseVars.color.grey80})`
        }
	}
});
