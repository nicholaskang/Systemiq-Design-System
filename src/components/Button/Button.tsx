import React from "react";
import * as S from "./Button.styles";

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
    <S.Button
      type="button"
      variant={variant}
      size={size}
      label={label}
      {...props}>
      <span>{label}</span>
    </S.Button>
  );
};
