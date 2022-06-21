import {style} from "@vanilla-extract/css";
import {atoms} from "~/styles/atoms.css";
import { baseVars } from "~/styles/vars.css";

export const dock = style([
  atoms({
    alignItems: "center",
    borderRadius: "4",
    borderStyle: "solid",
    borderWidth: "1",
    display: "flex",
    gap: "4",
    left: "0",
    backgroundOpacity: 60,
    padding: "4",
    position: "fixed",
    top: "5"
  }),
  {
    backdropFilter: "blur(3px)",
    selectors: {
      [`html[data-theme='light'] &`]: {
        backgroundColor: `rgb(${baseVars.color.grey10}, 0.6)`
      },
      [`html[data-theme='dark'] &`]: {
        backgroundColor: `rgb(${baseVars.color.grey100}, 0.6)`
      }
    }
  }
]);