import { globalStyle } from '@vanilla-extract/css';
import { baseVars } from './vars.css';

export * from './vars.css';

globalStyle('html', {
	backgroundColor: `rgb(${baseVars.color.grey100})`
});

globalStyle('body', {
	fontFamily: baseVars.fontFamily.body,
	margin: 0,
	WebkitFontSmoothing: "antialiased"
});

globalStyle('*, *::after, *::before', {
	boxSizing: "border-box"
});
