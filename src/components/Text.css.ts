import { style, styleVariants } from '@vanilla-extract/css';
import { atoms } from '~/styles/atoms.css';
import { baseVars } from '~/styles/vars.css';
import { darkMode, lightMode } from '~/styles/queries';

const baseText = style([
	atoms({
		fontFamily: 'body',
		margin: '0',
		padding: '0'
	}),
	{
		lineHeight: 1
	}
]);

const headingBase = {
	fontWeight: baseVars.fontWeight.extraBold
};

export const text = styleVariants(
	{
		h1: {
			...headingBase,
            fontSize: baseVars.fontSizes[8],
			selectors: {
				[`${lightMode} &`]: {
                    color: `rgb(${baseVars.color.grey100})`,
                },
				[`${darkMode} &`]: {
                    color: `rgb(${baseVars.color.grey10})`,
                }
			},
		},
		h2: {
			...headingBase,
            fontSize: baseVars.fontSizes[7],
			selectors: {
				[`${lightMode} &`]: {
                    color: `rgb(${baseVars.color.grey100})`,
                },
				[`${darkMode} &`]: {
					color: `rgb(${baseVars.color.grey10})`,
				}
			},
		},
        p: {
            fontSize: baseVars.fontSizes[3],
			selectors: {
				[`${lightMode} &`]: {
                    color: `rgb(${baseVars.color.grey70})`,
                },
				[`${darkMode} &`]: {
					color: `rgb(${baseVars.color.grey50})`,
				}
			},
		},
		span: {
            fontSize: baseVars.fontSizes[3],
			selectors: {
				[`${lightMode} &`]: {
                    color: `rgb(${baseVars.color.grey70})`,
                },
				[`${darkMode} &`]: {
					color: `rgb(${baseVars.color.grey50})`,
				}
			},
		}
	},
	(variant) => [baseText, style(variant)]
);
