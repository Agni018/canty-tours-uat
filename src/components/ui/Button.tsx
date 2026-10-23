import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cx } from "@/lib/utils";
import { Icon } from "./Icon";
import styles from "./Button.module.css";

type Common = {
  /** dark (default), orange for the main call to action, outline for a secondary action. */
  variant?: "dark" | "orange" | "outline";
  small?: boolean;
  /** Adds the ↗ arrow after the label. */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};
type AsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AsLink = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Primary call-to-action. Renders a link when `href` is given, otherwise a button. */
export function Button({
  variant = "dark",
  small,
  arrow,
  className,
  children,
  ...rest
}: AsButton | AsLink) {
  const classes = cx(
    styles.button,
    variant === "orange" && styles.orange,
    variant === "outline" && styles.outline,
    small && styles.small,
    className,
  );
  const content = (
    <>
      {children}
      {arrow && (
        <>
          {" "}
          <Icon name="arrow" />
        </>
      )}
    </>
  );
  if (rest.href !== undefined) {
    return (
      <a
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }
  const { type = "button", ...buttonProps } =
    rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
