import { baseColors } from "./tokens";

export type ThemeMode = "light" | "dark";

const commonTokens = {
  space: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.5rem",
    6: "2rem",
    7: "2.5rem",
    8: "3rem",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.5rem",
    full: "9999px",
  },
} as const;

export const lightTheme = {
  ...commonTokens,
  colors: {
    // Semantic colors
    background: {
      primary: "#ffffff",
      secondary: baseColors.gray[50],
      tertiary: baseColors.gray[100],
    },
    text: {
      primary: baseColors.gray[900],
      secondary: baseColors.gray[700],
      tertiary: baseColors.gray[500],
      inverse: "#ffffff",
    },
    // Component colors
    button: {
      default: {
        bg: baseColors.gray[100],
        text: baseColors.gray[900],
        hover: baseColors.gray[200],
        active: baseColors.gray[300],
      },
      primary: {
        bg: baseColors.blue[500],
        text: "#ffffff",
        hover: baseColors.blue[600],
        active: baseColors.blue[700],
      },
      subtle: {
        bg: "transparent",
        text: baseColors.gray[900],
        hover: baseColors.gray[100],
        active: baseColors.gray[200],
      },
      warning: {
        bg: baseColors.yellow[500],
        text: baseColors.gray[900],
        hover: baseColors.yellow[600],
        active: baseColors.yellow[700],
      },
      danger: {
        bg: baseColors.red[500],
        text: "#ffffff",
        hover: baseColors.red[600],
        active: baseColors.red[700],
      },
      discovery: {
        bg: baseColors.purple[500],
        text: "#ffffff",
        hover: baseColors.purple[600],
        active: baseColors.purple[700],
      },
    },
  },
} as const;

export const darkTheme = {
  ...commonTokens,
  colors: {
    background: {
      primary: baseColors.gray[900],
      secondary: baseColors.gray[800],
      tertiary: baseColors.gray[700],
    },
    text: {
      primary: baseColors.gray[50],
      secondary: baseColors.gray[200],
      tertiary: baseColors.gray[400],
      inverse: baseColors.gray[900],
    },
    button: {
      default: {
        bg: baseColors.gray[700],
        text: baseColors.gray[50],
        hover: baseColors.gray[600],
        active: baseColors.gray[500],
      },
      primary: {
        bg: baseColors.blue[500],
        text: "#ffffff",
        hover: baseColors.blue[400],
        active: baseColors.blue[300],
      },
      subtle: {
        bg: "transparent",
        text: baseColors.gray[50],
        hover: baseColors.gray[800],
        active: baseColors.gray[700],
      },
      warning: {
        bg: baseColors.yellow[500],
        text: baseColors.gray[900],
        hover: baseColors.yellow[400],
        active: baseColors.yellow[300],
      },
      danger: {
        bg: baseColors.red[500],
        text: "#ffffff",
        hover: baseColors.red[400],
        active: baseColors.red[300],
      },
      discovery: {
        bg: baseColors.purple[500],
        text: "#ffffff",
        hover: baseColors.purple[400],
        active: baseColors.purple[300],
      },
    },
  },
} as const;

export type Theme = typeof lightTheme;
