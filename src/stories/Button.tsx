import React from "react";

import "./button.scss";

export interface ButtonProps {
  /** Semantic Variant - Usage and style */
  variant?:
    | "default"
    | "primary"
    | "subtle"
    | "warning"
    | "danger"
    | "discovery";
  /** Size */
  size?: "small" | "medium" | "large";
  /** Button text */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** A button triggers an event or action */
export const Button = ({
  variant = "default",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        `storybook-button--${variant}`,
      ].join(" ")}
      {...props}>
      {label}
    </button>
  );
};
