export const typography = {
  fontSizes: {
    "2xs": "0.625rem", // 10px
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  fontFamily: {
    body: "'Lato', sans-serif",
    heading: "'Museo Sans', serif",
  },
  letterSpacing: {
    tight: "-0.02em", // For hero text
    snug: "-0.015em", // For h1
    subtle: "-0.01em", // For h2
    normal: "0", // Default
    wide: "0.01em", // For small text that needs slight expansion
  },
} as const;
