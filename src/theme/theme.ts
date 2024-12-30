import { colors, spacing, typography, radius } from "@/tokens/core";
import { semanticColors } from "@/tokens/semantic/colors";

export type ThemeType = {
  typography: {
    size: typeof typography.fontSizes; // Make sure this matches your core typography export
    fontWeights: typeof typography.fontWeights;
    fontFamily: typeof typography.fontFamily;
  };
  spacing: typeof spacing;
  radius: typeof radius;
  semanticColors: typeof semanticColors;
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
  semanticColors,
} as const;
