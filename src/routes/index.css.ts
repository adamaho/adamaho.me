import { style } from "@vanilla-extract/css";
import { atoms } from "~/styles/atoms.css";
import { breakpoints } from "~/styles/queries";

export const welcome = style([
  atoms({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "full",
    justifyContent: "center",
    gap: "12",
    paddingTop: "12",
    paddingBottom: "13"
  })
]);

export const welcomeHeading = style([
  atoms({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "3",
    width: "full"
  })
]);

export const welcomeUnlock = style([
  atoms({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "6",
    width: "full"
  })
]);

export const shortcut = style([
  atoms({
    alignItems: "center",
    display: "none",
    gap: "4"
  }),
  {
    "@media": {
      [breakpoints.sm]: {
        display: "flex"
      }
    }
  }
]);
