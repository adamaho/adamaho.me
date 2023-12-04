import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type PropsWithChildren,
} from "react";

import { Slot } from "@radix-ui/react-slot";

type HeadingComponentProps = ComponentPropsWithoutRef<"div">;
type HeadingElementAttributes = Omit<
  HeadingComponentProps,
  "children" | "className"
>;

type HeadingElement = ElementRef<"h1">;
type HeadingProps = {
  /**
   * modifies the texts alignment relative to its container
   *
   * @default "left"
   */
  align?: "left" | "center" | "right";

  /**
   * rendered html attributes
   *
   * @default undefined
   */
  attributes?: HeadingElementAttributes;

  /**
   * changes the rendered html element
   *
   * @default "span"
   */
  displayAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  /**
   * modifies the color of the heading
   *
   * @default "gray"
   */
  color?: "orange" | "gray";

  /**
   * modifies the contrast of the heading
   *
   * @default "high"
   */
  contrast?: "low" | "medium" | "high";

  /**
   * component className
   *
   * @default undefined
   */
  className?: string;

  /**
   * modifies the font-family of the heading
   *
   * @default "sans"
   */
  family?: "sans" | "mono" | "serif";

  /**
   * modifies the font-size of the heading
   *
   * @default "6"
   */
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
};

const Heading = forwardRef<HeadingElement, PropsWithChildren<HeadingProps>>(
  (
    {
      align = "left",
      displayAs: Comp = "h1",
      attributes,
      children,
      color = "gray",
      contrast = "high",
      family = "sans",
      size = "7",
      ...rest
    },
    ref
  ) => {
    return (
      <Slot
        {...attributes}
        {...rest}
        aho-heading=""
        aho-text=""
        aho-text-align={align}
        aho-accent-color={color}
        aho-text-contrast={contrast}
        aho-text-family={family}
        aho-text-size={size}
        aho-text-weight="normal"
        ref={ref}
      >
        <Comp>{children}</Comp>
      </Slot>
    );
  }
);

Heading.displayName = "Heading";

export { Heading };
export type { HeadingProps };
