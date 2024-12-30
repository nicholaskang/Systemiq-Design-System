import { FC } from "react";
import { BaseProps } from "@/types";
import * as S from "./ComponentName.styles";

export interface ComponentNameProps extends BaseProps {
  // Component-specific props
}

export const ComponentName: FC<ComponentNameProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <S.Container
      className={className}
      {...props}>
      {children}
    </S.Container>
  );
};
