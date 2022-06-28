import { breakpoints as _breakpoints } from './breakpoints';

export const darkMode = "html[data-theme='dark']";
export const lightMode = "html[data-theme='light']";
export const breakpoints = {
	sm: `screen and (min-width: ${_breakpoints.sm}px)`,
	md: `screen and (min-width: ${_breakpoints.md}px)`,
	lg: `screen and (min-width: ${_breakpoints.lg}px)`,
	xl: `screen and (min-width: ${_breakpoints.xl}px)`
};
