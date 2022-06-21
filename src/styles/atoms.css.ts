import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { calc } from '@vanilla-extract/css-utils';
import { createVar } from '@vanilla-extract/css';
import type { StyleRule } from '@vanilla-extract/css';

import { animationSpeed, borderWidths, colors, fontFamily, fontSizes, fontWeight, radii, spacing } from './tokens';

import { breakpoints } from './breakpoints';

import type { Colors } from './tokens';

// Ensure reset has lowest specificity
/* DO NOT MOVE THIS LINE */
import './reset.css';
/* DO NOT MOVE THIS LINE */

/* -------------------------------------------------------------------------------------------------
 * Colors
 * -----------------------------------------------------------------------------------------------*/
const opacities = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const;

type OpacityKeys = keyof typeof opacities;

export const backgroundOpacity = createVar();
export const borderOpacity = createVar();
export const colorOpacity = createVar();

const opacityVars = {
	backgroundColor: backgroundOpacity,
	borderColor: borderOpacity,
	color: colorOpacity
};

const computeColorProperties = (
	property: keyof typeof opacityVars,
	values: { [key: string]: string }
) => {
	const colorProperties = <{ [key in Colors]: StyleRule }>{};

	for (const color of Object.entries(values)) {
		const [key, value] = color;
		colorProperties[key as Colors] = {
			vars: {
				[opacityVars[property]]: '1'
			},
			[property]: `rgba(${value}, ${opacityVars[property]})`
		};
	}

	return colorProperties;
};

const computeOpacityProperities = (property: keyof typeof opacityVars) => {
	const opacityProperties = <{ [key in OpacityKeys]: StyleRule }>{};

	for (const opacity of opacities) {
		opacityProperties[opacity] = {
			vars: {
				[opacityVars[property]]: `${opacity / 100}`
			}
		};
	}

	return opacityProperties;
};

const colorProperties = defineProperties({
	properties: {
		backgroundColor: {...computeColorProperties('backgroundColor', colors()), transparent: "transparent" },
		backgroundOpacity: computeOpacityProperities('backgroundColor'),
		borderColor: {...computeColorProperties('borderColor', colors()), transparent: "transparent" },
		borderOpacity: computeOpacityProperities('borderColor'),
		color: computeColorProperties('color', colors()),
		colorOpacity: computeOpacityProperities('color')
	}
});

/* -------------------------------------------------------------------------------------------------
 * Borders
 * -----------------------------------------------------------------------------------------------*/
const borderProperties = defineProperties({
	properties: {
		borderStyle: ['solid']
	}
});

/* -------------------------------------------------------------------------------------------------
 * Fonts
 * -----------------------------------------------------------------------------------------------*/
const fontProperties = defineProperties({
	properties: {
		fontFamily,
		fontWeight
	}
});

/* -------------------------------------------------------------------------------------------------
 * Responsive Properties
 * -----------------------------------------------------------------------------------------------*/
const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const;

const flexibility = [0, 1, 2, 3, 4] as const;

const margin = { ...spacing, auto: 'auto' };

const negativeSpace = {
	'-px': `${calc(spacing.px).negate()}`,
	'-1': `${calc(spacing['1']).negate()}`,
	'-2': `${calc(spacing['2']).negate()}`,
	'-3': `${calc(spacing['3']).negate()}`,
	'-4': `${calc(spacing['4']).negate()}`,
	'-5': `${calc(spacing['5']).negate()}`,
	'-6': `${calc(spacing['6']).negate()}`,
	'-7': `${calc(spacing['7']).negate()}`,
	'-8': `${calc(spacing['8']).negate()}`,
	'-9': `${calc(spacing['9']).negate()}`,
	'-10': `${calc(spacing['10']).negate()}`,
	'-11': `${calc(spacing['11']).negate()}`,
	'-12': `${calc(spacing['12']).negate()}`
};

const extendedSpace = {
	'1/4': '25%',
	'1/3': '33.333333%',
	'1/2': '50%',
	'2/3': '66.666667%',
	'3/4': '75%',
	full: '100%',
	auto: 'auto',
	screenSm: breakpoints.sm,
	screenMd: breakpoints.md,
	screenLg: breakpoints.lg,
	screenXl: breakpoints.xl
};

const responsiveProperties = defineProperties({
	defaultCondition: 'xs',
	conditions: {
		xs: {},
		sm: { '@media': `(min-width: ${breakpoints.sm}px)` },
		md: { '@media': `(min-width: ${breakpoints.md}px)` },
		lg: { '@media': `(min-width: ${breakpoints.lg}px)` },
		xl: { '@media': `(min-width: ${breakpoints.xl}px)` }
	},
	properties: {
		alignItems: [...flexAlignment, 'baseline'],
		alignSelf: [...flexAlignment, 'baseline'],
		borderTopWidth: borderWidths,
		borderRightWidth: borderWidths,
		borderBottomWidth: borderWidths,
		borderLeftWidth: borderWidths,
		borderTopLeftRadius: radii,
		borderTopRightRadius: radii,
		borderBottomRightRadius: radii,
		borderBottomLeftRadius: radii,
		bottom: { ...spacing, ...negativeSpace },
		display: ['block', 'flex', 'grid', 'inline', 'inline-flex', 'inline-block', 'none', 'contents'],
		flex: {
			1: '1 1 0%',
			auto: '1 1 auto',
			initial: '0 1 auto',
			none: 'none'
		},
		flexBasis: {
			...spacing,
			...extendedSpace
		},
		flexDirection: ['column', 'row'],
		flexGrow: flexibility,
		flexShrink: flexibility,
		flexWrap: ['wrap', 'nowrap'],
		fontSize: fontSizes,
		gap: spacing,
		height: spacing,
		inset: { ...spacing, ...negativeSpace },
		justifyContent: [...flexAlignment, 'space-around', 'space-between'],
		justifySelf: flexAlignment,
		left: { ...spacing, ...negativeSpace },
		marginBottom: { ...margin, ...negativeSpace },
		marginLeft: { ...margin, ...negativeSpace },
		marginRight: { ...margin, ...negativeSpace },
		marginTop: { ...margin, ...negativeSpace },
		maxHeight: spacing,
		maxWidth: {
			...spacing,
			...extendedSpace,
			none: 'none'
		},
		minHeight: spacing,
		minWidth: spacing,
		overflow: ['auto', 'hidden', 'scroll', 'unset'],
		paddingBottom: spacing,
		paddingLeft: spacing,
		paddingRight: spacing,
		paddingTop: spacing,
		position: ['absolute', 'fixed', 'relative', 'sticky'],
		right: { ...spacing, ...negativeSpace },
		textAlign: ['center', 'left', 'right'],
		top: { ...spacing, ...negativeSpace },
		width: {
			...spacing,
			...extendedSpace
		}
	},
	shorthands: {
		borderRadius: [
			'borderTopLeftRadius',
			'borderTopRightRadius',
			'borderBottomRightRadius',
			'borderBottomLeftRadius'
		],
		borderWidth: ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'],
		padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom']
	}
});

/* -------------------------------------------------------------------------------------------------
 * Unresponsive Properties
 * -----------------------------------------------------------------------------------------------*/
const unresponsiveProperties = defineProperties({
	properties: {
		aspectRatio: {
			auto: 'auto',
			'1/1': '1 / 1',
			'2/1': '2 / 1',
			'4/1': '4 / 1',
			'4/3': '4 / 3',
			'16/9': '16 / 9'
		},
		cursor: ['default', 'pointer', 'not-allowed'],
		isolation: ['isolate'],
		objectFit: ['contain', 'cover'],
		pointerEvents: ['none'],
		scrollMarginTop: spacing,
		textTransform: ['capitalize', 'lowercase', 'uppercase'],
		textDecoration: ["none"],
		transitionProperty: {
			none: 'none',
			all: 'all',
			default:
				'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
			colors: 'background-color, border-color, color, fill, stroke',
			opacity: 'opacity',
			shadow: 'box-shadow',
			transform: 'transform'
		},
		transitionTimingFunction: {
			linear: 'linear',
			ease: 'ease',
			in: 'cubic-bezier(0.4, 0, 1, 1)',
			out: 'cubic-bezier(0, 0, 0.2, 1)',
			inOut: 'cubic-bezier(0.42, 0, 0.58, 1)'
		},
		transitionDuration: animationSpeed,
		visibility: ['hidden', 'visible'],
		whiteSpace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'initial', 'inherit'],
		wordBreak: ['break-word'],
		wordWrap: ['normal', 'break-word', 'initial', 'inherit'],
		zIndex: {
			'0': 0,
			'10': 10,
			'20': 20,
			'30': 30,
			'40': 40,
			'50': 50,
			'75': 75,
			'100': 100,
			auto: 'auto'
		}
	}
});

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export const atoms = createSprinkles(
	borderProperties,
	colorProperties,
	fontProperties,
	responsiveProperties,
	unresponsiveProperties
);

export type Atoms = Parameters<typeof atoms>[0];
