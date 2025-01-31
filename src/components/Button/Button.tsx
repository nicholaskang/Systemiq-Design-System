import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { ButtonProps } from "./Button.types";
import * as S from "./Button.styles";
import { useTheme } from "@emotion/react";
export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, disabled, isLoading, intent = "primary", ...props }, ref) => {
  const theme = useTheme();
  const spinnerColor = theme.semanticColors.status[intent].buttonText;
  return (
    <S.Button
      {...props}
      intent={intent}
      disabled={disabled}
      isLoading={isLoading}
      aria-busy={isLoading ? "true" : "false"}
      ref={ref}>
      {isLoading && (
        <ClipLoader
          size={12}
          color={spinnerColor}
        />
      )}
      {children}
    </S.Button>
  );
});

Button.displayName = "Button";
