import React from "react";
import { ButtonProps } from "./Button.types";
import * as S from "./Button.styles";

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, disabled, ...props }, ref) => {
  return (
    <S.Button
      {...props}
      disabled={disabled}
      ref={ref}>
      {children}
    </S.Button>
  );
});

Button.displayName = "Button";
