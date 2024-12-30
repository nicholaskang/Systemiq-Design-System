import React from "react";
import { Button as StyledButton } from "./Button.styles";

export interface ButtonProps {
  /** Button content */
  children: React.ReactNode;
  /** Visual style variant */
  variant?:
    | "default"
    | "primary"
    | "subtle"
    | "warning"
    | "danger"
    | "discovery";
  /** Size */
  size?: "small" | "medium" | "large";
  /** Optional click handler */
  onClick?: () => void;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "default", size = "medium", ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        type="button"
        variant={variant}
        size={size}
        {...props}>
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";
