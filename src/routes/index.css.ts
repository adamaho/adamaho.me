import { style } from "@vanilla-extract/css";
import { baseVars } from "~/styles/vars.css";

export const test = style({
  backgroundColor: `rgb(${baseVars.color.green100})`
});