"use client";
import { Theme as EmotionTheme } from "@emotion/react";
import { spacing, radius } from "@/tokens/core";
import { semanticTypography } from "@/tokens";
import {
  lightColors,
  darkColors,
  type SemanticColorTypes,
} from "@/tokens/semantic/colors";

export type ThemeType = {
  typography: typeof semanticTypography;
  spacing: typeof spacing;
  radius: typeof radius;
  semanticColors: SemanticColorTypes;
};

declare module "@emotion/react" {
  interface Theme extends EmotionTheme, ThemeType {}
}

export const lightTheme: ThemeType = {
  typography: semanticTypography,
  spacing,
  radius,
  semanticColors: lightColors,
} as const;

export const darkTheme: ThemeType = {
  typography: semanticTypography,
  spacing,
  radius,
  semanticColors: darkColors,
} as const;
