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
				site: '',
				widget: ''
			},
			border: {
				subtle: ''
			},
			code: {
				attr: '',
				keyword: '',
				name: '',
				property: '',
				title: ''
			},
			gradients: {
				brand: ''
			},
			heading: {
				default: ''
			},
			icon: {
				default: ''
			},
			link: {
				default: ''
			},
			separator: '',
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
			site: baseVars.color.grey100,
			widget: baseVars.color.grey80
		},
		border: {
			subtle: `rgb(${baseVars.color.grey80})`
		},
		code: {
			attr: `rgb(${baseVars.color.purple30})`,
			keyword: `rgb(${baseVars.color.blue30})`,
			name: `rgb(${baseVars.color.pink30})`,
			property: `rgb(${baseVars.color.grey30})`,
			title: `rgb(${baseVars.color.pink30})`
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
		icon: {
			default: baseVars.color.grey30
		},
		link: {
			default: `rgb(${baseVars.color.grey20})`
		},
		separator: `rgb(${baseVars.color.grey80})`,
		text: {
			default: `rgb(${baseVars.color.grey50})`
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
			site: baseVars.color.grey10,
			widget: baseVars.color.grey30
		},
		border: {
			subtle: `rgb(${baseVars.color.grey30})`
		},
		code: {
			attr: `rgb(${baseVars.color.purple60})`,
			keyword: `rgb(${baseVars.color.blue60})`,
			name: `rgb(${baseVars.color.pink60})`,
			property: `rgb(${baseVars.color.grey90})`,
			title: `rgb(${baseVars.color.pink60})`
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
		icon: {
			default: baseVars.color.grey30
		},
		link: {
			default: `rgb(${baseVars.color.grey90})`
		},
		separator: `rgb(${baseVars.color.grey60})`,
		text: {
			default: `rgb(${baseVars.color.grey70})`
		}
	}
});
