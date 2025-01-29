export type TypographyTokens = {
  fontSize: Record<string, string>;
  lineHeight: Record<string, number>;
  fontWeight: Record<string, number>;
  fontFamily: Record<string, string>;
  letterSpacing: Record<string, string>;
};

export const typography: TypographyTokens = {
  fontSize: {
    xs: "0.625rem", // 10px
    sm: "0.75rem", // 12px
    base: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
  },

  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  fontWeight: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },

  fontFamily: {
    body: "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    heading: "'Museo Sans', Georgia, serif",
  },

  letterSpacing: {
    tight: "-0.02em",
    snug: "-0.015em",
    subtle: "-0.01em",
    normal: "0",
    wide: "0.01em",
  },
} as const;

export type FontSize = keyof typeof typography.fontSize;
export type LineHeight = keyof typeof typography.lineHeight;
export type FontWeight = keyof typeof typography.fontWeight;
export type FontFamily = keyof typeof typography.fontFamily;
export type LetterSpacing = keyof typeof typography.letterSpacing;
