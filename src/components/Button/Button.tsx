import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { ButtonProps } from "./Button.types";
import * as S from "./Button.styles";

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, disabled, isLoading, ...props }, ref) => {
  return (
    <S.Button
      {...props}
      disabled={disabled || isLoading}
      ref={ref}>
      {isLoading && <ClipLoader size={12} />}
      {children}
    </S.Button>
  );
});

Button.displayName = "Button";
