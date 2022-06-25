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
