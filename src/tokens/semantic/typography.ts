import { typography } from "../core/typography";

type TypographyProps = {
  fontFamily: string;
  fontSize: string;
  lineHeight: number;
  fontWeight: number;
  letterSpacing?: string;
  textDecoration?: string;
};

type HeadingStyles = {
  hero: TypographyProps;
  h1: TypographyProps;
  h2: TypographyProps;
  h3: TypographyProps;
  h4: TypographyProps;
  h5: TypographyProps;
};

type BodyStyles = {
  large: TypographyProps;
  default: TypographyProps;
  small: TypographyProps;
};

type InlineStyles = {
  link: TypographyProps;
  strong: TypographyProps;
  button: TypographyProps;
};

export type SemanticTypography = {
  heading: HeadingStyles;
  body: BodyStyles;
  inline: InlineStyles;
};

export const semanticTypography: SemanticTypography = {
  heading: {
    hero: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSize["5xl"],
      lineHeight: typography.lineHeight.tight,
      fontWeight: typography.fontWeight.bold,
      letterSpacing: typography.letterSpacing.tight,
    },
    h1: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSize["4xl"],
      lineHeight: typography.lineHeight.tight,
      fontWeight: typography.fontWeight.bold,
      letterSpacing: typography.letterSpacing.snug,
    },
    h2: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSize["3xl"],
      lineHeight: typography.lineHeight.snug,
      fontWeight: typography.fontWeight.semibold,
      letterSpacing: typography.letterSpacing.subtle,
    },
    h3: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSize["2xl"],
      lineHeight: typography.lineHeight.snug,
      fontWeight: typography.fontWeight.semibold,
    },
    h4: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSize.xl,
      lineHeight: typography.lineHeight.normal,
      fontWeight: typography.fontWeight.medium,
    },
    h5: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSize.lg,
      lineHeight: typography.lineHeight.normal,
      fontWeight: typography.fontWeight.medium,
      letterSpacing: typography.letterSpacing.wide,
    },
  },
  body: {
    large: {
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSize.lg,
      lineHeight: typography.lineHeight.normal,
      fontWeight: typography.fontWeight.regular,
    },
    default: {
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSize.md,
      lineHeight: typography.lineHeight.normal,
      fontWeight: typography.fontWeight.regular,
    },
    small: {
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSize.base,
      lineHeight: typography.lineHeight.normal,
      fontWeight: typography.fontWeight.regular,
    },
  },
  inline: {
    link: {
      fontFamily: typography.fontFamily.body,
      fontSize: "inherit",
      lineHeight: typography.lineHeight.normal,
      fontWeight: typography.fontWeight.medium,
      textDecoration: "underline",
    },
    strong: {
      fontFamily: typography.fontFamily.body,
      fontSize: "inherit",
      lineHeight: typography.lineHeight.normal,
      fontWeight: typography.fontWeight.semibold,
    },
    button: {
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSize.md,
      lineHeight: typography.lineHeight.none,
      fontWeight: typography.fontWeight.medium,
      letterSpacing: typography.letterSpacing.wide,
    },
  },
} as const;
