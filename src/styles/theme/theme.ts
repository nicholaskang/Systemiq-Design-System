import { colors, spacing, typography, radius } from "@/tokens/core";

declare module "@emotion/react" {
  export interface Theme {
    fontSizes: typeof typography.fontSizes;
    fontWeights: typeof typography.fontWeights;
    fontFamily: typeof typography.fontFamily;
    space: typeof spacing;
    radii: typeof radius;
    colors: {
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
        inverse: string;
      };
      button: {
        [key: string]: {
          bg: string;
          text: string;
          hover: string;
          active: string;
        };
      };
    };
  }
}

export type ThemeMode = "light" | "dark";

export const lightTheme = {
  // Design tokens
  ...typography,
  space: spacing,
  radii: radius,

  // Theme-specific tokens
  colors: {
    background: {
      primary: colors.white,
      secondary: colors.gray[50],
      tertiary: colors.gray[100],
    },
    text: {
      primary: colors.black,
      secondary: colors.gray[700],
      tertiary: colors.gray[500],
      inverse: colors.white,
    },
    button: {
      default: {
        bg: colors.gray[100],
        text: colors.black,
        hover: colors.gray[200],
        active: colors.gray[300],
      },
      primary: {
        bg: colors.blue[500],
        text: colors.white,
        hover: colors.blue[600],
        active: colors.blue[700],
      },
      subtle: {
        bg: colors.transparent,
        text: colors.black,
        hover: colors.gray[50],
        active: colors.gray[100],
      },
      warning: {
        bg: colors.yellow[500],
        text: colors.black,
        hover: colors.yellow[600],
        active: colors.yellow[700],
      },
      danger: {
        bg: colors.red[500],
        text: colors.white,
        hover: colors.red[600],
        active: colors.red[700],
      },
      discovery: {
        bg: colors.purple[500],
        text: colors.white,
        hover: colors.purple[600],
        active: colors.purple[700],
      },
    },
  },
} as const;

export const darkTheme = {
  // Design tokens - same as light theme
  ...typography,
  space: spacing,
  radii: radius,

  // Theme-specific tokens
  colors: {
    background: {
      primary: colors.gray[900],
      secondary: colors.gray[800],
      tertiary: colors.gray[700],
    },
    text: {
      primary: colors.gray[50],
      secondary: colors.gray[200],
      tertiary: colors.gray[400],
      inverse: colors.black,
    },
    button: {
      default: {
        bg: colors.gray[700],
        text: colors.gray[50],
        hover: colors.gray[600],
        active: colors.gray[500],
      },
      primary: {
        bg: colors.blue[500],
        text: colors.white,
        hover: colors.blue[400],
        active: colors.blue[300],
      },
      subtle: {
        bg: colors.transparent,
        text: colors.gray[50],
        hover: colors.gray[800],
        active: colors.gray[700],
      },
      warning: {
        bg: colors.yellow[500],
        text: colors.black,
        hover: colors.yellow[400],
        active: colors.yellow[300],
      },
      danger: {
        bg: colors.red[500],
        text: colors.white,
        hover: colors.red[400],
        active: colors.red[300],
      },
      discovery: {
        bg: colors.purple[500],
        text: colors.white,
        hover: colors.purple[400],
        active: colors.purple[300],
      },
    },
  },
} as const;

export type Theme = typeof lightTheme;
