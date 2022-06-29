import { globalStyle } from '@vanilla-extract/css';
import { baseVars } from './vars.css';
import { lightMode, darkMode } from './queries';

export * from './vars.css';

globalStyle(lightMode, {
	backgroundColor: `rgb(${baseVars.color.grey10})`
});

globalStyle(darkMode, {
	backgroundColor: `rgb(${baseVars.color.grey100})`
});

globalStyle("html", {
    height: "-webkit-fill-available"
});

globalStyle('body', {
	fontFamily: baseVars.fontFamily.body,
    minHeight: "100vh",
    height: "100%",
	margin: 0,
	WebkitFontSmoothing: 'antialiased'
});

globalStyle('*, *::after, *::before', {
	boxSizing: 'border-box'
});
