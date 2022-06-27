import { style } from "@vanilla-extract/css";
import { atoms } from "~/styles/atoms.css";
import { darkMode, lightMode } from "~/styles/queries";
import { baseVars } from "~/styles/vars.css";


export const keyboardKey = style([
  atoms({
    alignItems: "center",
    borderRadius: "2",
    display: "flex",
    fontFamily: "body",
    fontSize: "4",
    height: "10",
    justifyContent: "center",
    width: "10",
  }),
  {
    "selectors": {
      [`${lightMode} &`]: {
        
      },
      [`${darkMode} &`]: {
        backgroundColor: `rgb(${baseVars.color.grey90})`,
        color: `rgb(${baseVars.color.grey40})`
      }
    }
  }
]);