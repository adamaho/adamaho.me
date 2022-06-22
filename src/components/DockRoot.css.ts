import {style} from "@vanilla-extract/css";

import {atoms} from "~/styles/atoms.css";
import {baseVars} from "~/styles/vars.css";
import { darkMode, lightMode } from "~/styles/queries"; 

export const dock = style([
  atoms({
    alignItems: "center",
    backgroundOpacity: 60,
    borderRadius: "4",
    borderStyle: "solid",
    borderWidth: "1",
    display: "flex",
    gap: "4",
    padding: "4",
    position: "relative",
    width: "full"
  }),
  {
    backdropFilter: "blur(3px)",
    selectors: {
      [`${lightMode} &`]: {
        borderColor: `rgb(${baseVars.color.grey20})`,
        boxShadow: `0 -2px 3px rgb(${baseVars.color.grey20})`
      },
      [`${darkMode} &`]: {
        borderColor: `rgb(${baseVars.color.grey90})`
      }
    }
  }
]);