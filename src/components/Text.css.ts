import { style, styleVariants } from "@vanilla-extract/css";
import { atoms } from "~/styles/atoms.css";
import { baseVars } from "~/styles/vars.css";
import { darkMode, lightMode, breakpoints } from '~/styles/queries';

const baseText = style([
  atoms({
    fontFamily: "body",
    margin: "0",
    padding: "0"
  }),
  {
    lineHeight: 1
  }
]);

const headingBase = {
  fontWeight: baseVars.fontWeight.extraBold,
};

export const text = styleVariants({
  h1: {
    ...headingBase,
    selectors: {
      [`${lightMode} &`]: {

			},
			[`${darkMode} &`]: {
        color: `rgb(${baseVars.color.grey40})`,
        fontSize: baseVars.fontSizes[9],
			}
    },
    "@media": {
      [breakpoints.md]: {
        fontSize: baseVars.fontSizes[9],
      }
    }
  },
  h2: {
    ...headingBase,
    selectors: {
      [`${lightMode} &`]: {

			},
			[`${darkMode} &`]: {
        color: `rgb(${baseVars.color.grey40})`
			}
    },
    "@media": {
      [breakpoints.md]: {
        fontSize: baseVars.fontSizes[7]
      }
    }
  },
  span: {
    selectors: {
      [`${lightMode} &`]: {

			},
			[`${darkMode} &`]: {
        color: `rgb(${baseVars.color.grey50})`,
        fontSize: baseVars.fontSizes[4]
			}
    },
    "@media": {
      [breakpoints.md]: {
        fontSize: baseVars.fontSizes[9]
      }
    }
  }
}, (variant) => [baseText, style(variant)])