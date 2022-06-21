import chroma from 'chroma-js';

export const rawColors = {
	red10: '#fef2f2',
	red20: '#fee2e2',
	red30: '#fecaca',
	red40: '#fca5a5',
	red50: '#f87171',
	red60: '#f87171',
	red70: '#f87171',
	red80: '#b91c1c',
	red90: '#991b1b',
	red100: '#7f1d1d',

	orange10: '#fff7ed',
	orange20: '#ffedd5',
	orange30: '#fed7aa',
	orange40: '#fdba74',
	orange50: '#fb923c',
	orange60: '#f97316',
	orange70: '#ea580c',
	orange80: '#c2410c',
	orange90: '#9a3412',
	orange100: '#7c2d12',

	yellow10: '#fefce8',
	yellow20: '#fef9c3',
	yellow30: '#fef08a',
	yellow40: '#fde047',
	yellow50: '#facc15',
	yellow60: '#eab308',
	yellow70: '#ca8a04',
	yellow80: '#a16207',
	yellow90: '#854d0e',
	yellow100: '#713f12',

	green10: '#ecfdf5',
	green20: '#d1fae5',
	green30: '#a7f3d0',
	green40: '#6ee7b7',
	green50: '#34d399',
	green60: '#10b981',
	green70: '#059669',
	green80: '#047857',
	green90: '#065f46',
	green100: '#064e3b',

	blue10: '#eff6ff',
	blue20: '#dbeafe',
	blue30: '#bfdbfe',
	blue40: '#93c5fd',
	blue50: '#60a5fa',
	blue60: '#3b82f6',
	blue70: '#2563eb',
	blue80: '#1d4ed8',
	blue90: '#1e40af',
	blue100: '#1e3a8a',

	purple10: '#f5f3ff',
	purple20: '#ede9fe',
	purple30: '#ddd6fe',
	purple40: '#c4b5fd',
	purple50: '#a78bfa',
	purple60: '#8b5cf6',
	purple70: '#7c3aed',
	purple80: '#6d28d9',
	purple90: '#5b21b6',
	purple100: '#4c1d95',

	pink10: '#fdf2f8',
	pink20: '#fce7f3',
	pink30: '#fbcfe8',
	pink40: '#f9a8d4',
	pink50: '#f472b6',
	pink60: '#ec4899',
	pink70: '#db2777',
	pink80: '#be185d',
	pink90: '#9d174d',
	pink100: '#831843',

	grey10: '#f8fafc',
	grey20: '#f1f5f9',
	grey30: '#e2e8f0',
	grey40: '#cbd5e1',
	grey50: '#94a3b8',
	grey60: '#64748b',
	grey70: '#475569',
	grey80: '#334155',
	grey90: '#1e293b',
	grey100: '#0f172a',

	black: '#000000',
	white: '#FFFFFF'
} as const;

/**
 *
 * Converts an object of hex colors to rgb triplets
 *
 * @returns all of the colors with their rgb triplet
 */

export type Colors = keyof typeof rawColors;

export const colors = () => {
	const triplets = <{ [key in Colors]: string }>{};

	for (const [color, hex] of Object.entries(rawColors)) {
		const rgbArray = chroma(hex).rgb();
		triplets[color as Colors] = `${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}`;
	}

	return triplets;
};

export const animationSpeed = {
	slow: '0.5s',
	medium: '0.25s',
	fast: '0.15s'
} as const;

export type AnimationSpeed = keyof typeof animationSpeed;

export const borderWidths = {
	'0': '0px',
	'1': '1px',
	'2': '2px'
} as const;

export type BorderWidths = keyof typeof borderWidths;

export const radii = {
	'0': '0px',
	'1': '3px',
	'2': '6px',
	'3': '12px',
	'4': '14px',
	'5': '16px',
	'6': '20px',
	'7': '24px',
	round: '9999px'
} as const;

export type Radii = keyof typeof radii;

export const spacing = {
	'0': '0px',
	px: '1px',
	'1': '2px',
	'2': '4px',
	'3': '8px',
	'4': '12px',
	'5': '16px',
	'6': '20px',
	'7': '24px',
	'8': '28px',
	'9': '32px',
	'10': '40px',
	'11': '64px',
	'12': '128px'
} as const;

export type Spacing = keyof typeof spacing;

export const scale = {
	negSmall: '0.98',
	negMedium: '0.95',
	negLarge: '0.9',
	small: '1.02',
	medium: '1.05',
	large: '1.1'
};

export type Scale = keyof typeof scale;

export const fontSizes = {
	'1': '11px',
	'2': '14px',
	'3': '16px',
	'4': '20px',
	'5': '24px',
	'6': '26px',
	'7': '32px',
	'8': '40px',
	'9': '52px'
} as const;

export type FontSizes = keyof typeof fontSizes;

export const fontFamily = {
	body: "'Nunito', sans-serif"
} as const;

export type FontFamily = keyof typeof fontSizes;

export const fontWeight = {
	normal: '500',
	bold: '700',
	extraBold: '900'
} as const;

export type FontWeight = keyof typeof fontSizes;
