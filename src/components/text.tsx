import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type PropsWithChildren,
} from "react";

import { Slot } from "@radix-ui/react-slot";

type TextSpanComponentProps = ComponentPropsWithoutRef<"span">;
type TextSpanElementAttributes = Omit<TextSpanComponentProps, "children">;
type TextSpanProps = {
  /**
   * changes the rendered html element
   *
   * @default "span"
   */
  as?: "span";

  /**
   * rendered html attributes
   *
   * @default undefined
   */
  attributes?: TextSpanElementAttributes;
};

type TextLabelComponentProps = ComponentPropsWithoutRef<"label">;
type TextLabelElementAttributes = Omit<TextLabelComponentProps, "children">;
type TextLabelProps = {
  /**
   * changes the rendered html element
   *
   * @default "span"
   */
  as?: "label";

  /**
   * rendered html attributes
   *
   * @default undefined
   */
  attributes?: TextLabelElementAttributes;
};

type TextPComponentProps = ComponentPropsWithoutRef<"p">;
type TextPElementAttributes = Omit<TextPComponentProps, "children">;
type TextPProps = {
  /**
   * changes the rendered html element
   *
   * @default "span"
   */
  as?: "p";

  /**
   * rendered html attributes
   *
   * @default undefined
   */
  attributes?: TextPElementAttributes;
};

type TextDivComponentProps = ComponentPropsWithoutRef<"div">;
type TextDivElementAttributes = Omit<TextDivComponentProps, "children">;
type TextDivProps = {
  /**
   * changes the rendered html element
   *
   * @default "span"
   */
  as?: "div";

  /**
   * rendered html attributes
   *
   * @default undefined
   */
  attributes?: TextDivElementAttributes;
};

type TextElement = ElementRef<"span">;

type SharedTextProps = {
  /**
   * modifies the texts alignment relative to its container
   *
   * @default "left"
   */
  align?: "left" | "center" | "right";

  /**
   * component className
   *
   * @default undefined
   */
  className?: string;

  /**
   * modifies the color of the text
   *
   * @default "grey"
   */
  color?: "orange" | "grey";

  /**
   * modifies the contrast of the text
   *
   * @default "normal"
   */
  contrast?: "low" | "medium" | "high";

  /**
   * modifies the font-family of the heading
   *
   * @default "sans"
   */
  family?: "sans" | "mono" | "serif";

  /**
   * modifies the font-size of the text
   *
   * @default "2"
   */
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

  /**
   * modifies the font weight of the text
   *
   * @default "normal"
   */
  weight?: "light" | "normal" | "medium" | "bold" | "extra-bold";
};

type TextProps = SharedTextProps &
  (TextSpanProps | TextPProps | TextDivProps | TextLabelProps);

const Text = forwardRef<TextElement, PropsWithChildren<TextProps>>(
  (
    {
      align = "left",
      as: Comp = "span",
      attributes,
      children,
      className,
      color = "grey",
      contrast = "high",
      family = "sans",
      size = "2",
      weight = "normal",
      ...rest
    },
    ref
  ) => {
    return (
      <Slot
        {...attributes}
        {...rest}
        aho-text=""
        aho-text-align={align}
        aho-accent-color={color}
        aho-text-contrast={contrast}
        aho-text-family={family}
        aho-text-size={size}
        aho-text-weight={weight}
        className={className}
        ref={ref}
      >
        <Comp>{children}</Comp>
      </Slot>
    );
  }
);

Text.displayName = "Text";

export { Text };
export type { TextProps };
