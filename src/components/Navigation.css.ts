import { style } from "@vanilla-extract/css";
import { atoms } from "~/styles/atoms.css";

export const navigation = style([
    atoms({
        backgroundColor: "blue40",
        borderRadius: "2",
        bottom: "4",
        height: "8",
        position: "fixed",
        transitionDuration: "medium",
        transitionProperty: "transform",
        transitionTimingFunction: "ease",
        width: "12"
    }),
    {
        left: "50%",
        transform: "translate(-50%, -50%)",
        ":hover": {
            transformOrigin: "center center",
            transform: "translate(-50%, -50%) scaleX(1.5)"
        }
    }
]);