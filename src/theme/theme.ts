import { spacing, typography, radius } from "@/tokens/core";
import {
  lightColors,
  darkColors,
  type SemanticColorTypes,
} from "@/tokens/semantic/colors";

export type ThemeType = {
  typography: {
    size: typeof typography.fontSizes;
    fontWeights: typeof typography.fontWeights;
    fontFamily: typeof typography.fontFamily;
  };
  spacing: typeof spacing;
  radius: typeof radius;
  semanticColors: SemanticColorTypes;
};

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}

export const lightTheme: ThemeType = {
  typography: {
    size: typography.fontSizes,
    fontWeights: typography.fontWeights,
    fontFamily: typography.fontFamily,
  },
  spacing,
  radius,
  semanticColors: lightColors,
} as const;

export const darkTheme: ThemeType = {
  typography: {
    size: typography.fontSizes,
    fontWeights: typography.fontWeights,
    fontFamily: typography.fontFamily,
  },
  spacing,
  radius,
  semanticColors: darkColors,
} as const;
