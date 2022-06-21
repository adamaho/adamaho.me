import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';

import {
	animationSpeed,
	colors,
	radii,
	borderWidths,
	scale,
	spacing,
	fontFamily,
	fontSizes,
	fontWeight
} from './tokens';

export const baseVars = createGlobalThemeContract(
	{
		animationSpeed,
		borderWidths,
		color: colors(),
		fontFamily,
		fontSizes,
		fontWeight,
		radii,
		scale,
		spacing
	},
	(_value, path) => `aho-${path.join('-')}`
);

createGlobalTheme(':root', baseVars, {
	animationSpeed,
	borderWidths,
	color: colors(),
	fontFamily,
	fontSizes,
	fontWeight,
	radii,
	scale,
	spacing
});

export const theme = createGlobalThemeContract(
	{
		gradients: {
			blue: '',
			red: '',
			orange: '',
			green: '',
			grey: ''
		},
		boxShadows: {
			blue: {
				default: ''
			}
		}
	},
	(_value, path) => `aho-${path.join('-')}`
);

createGlobalTheme('[data-theme-mode="light"]', theme, {
	gradients: {
		blue: `linear-gradient(180deg, rgb(${baseVars.color.blue20}) 0%, rgb(${baseVars.color.white}) 94%)`,
		red: `linear-gradient(180deg, rgb(${baseVars.color.red20}) 0%, rgb(${baseVars.color.white}) 94%)`,
		orange: `linear-gradient(180deg, rgb(${baseVars.color.orange20}) 0%, rgb(${baseVars.color.white}) 94%)`,
		green: `linear-gradient(180deg, rgb(${baseVars.color.green20}) 0%, rgb(${baseVars.color.white}) 94%)`,
		grey: `linear-gradient(180deg, rgb(${baseVars.color.grey30}) 0%, rgb(${baseVars.color.white}) 94%)`
	},
	boxShadows: {
		blue: {
			default: `0px 2px 6px rgba(${baseVars.color.blue20}, 0.8)`
		}
	}
});
