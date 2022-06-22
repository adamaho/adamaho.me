import { style } from "@vanilla-extract/css";
import { atoms } from "~/styles/atoms.css";

export const dockItem = style([
  atoms({
    backgroundColor: "blue20",
    borderRadius: "2",
    height: "10",
    width: "10",
  }),
  {
    ":hover": {
      transform: "scale(1.2)",
      transformOrigin: "bottom center"
    }
  }
]);