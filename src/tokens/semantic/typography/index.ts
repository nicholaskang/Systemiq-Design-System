import { typography } from "../../core/typography";

export const semanticTypography = {
  heading: {
    // For impactful hero sections and main landing pages
    // Use sparingly as the largest text element on a page
    hero: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSizes["5xl"],
      lineHeight: typography.lineHeight.tight,
      fontWeight: typography.fontWeights.bold,
      letterSpacing: typography.letterSpacing.tight,
    },
    // Main page title, should only appear once per page
    h1: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSizes["4xl"],
      lineHeight: typography.lineHeight.tight,
      fontWeight: typography.fontWeights.bold,
      letterSpacing: typography.letterSpacing.snug,
    },
    // Major section headings
    h2: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSizes["3xl"],
      lineHeight: typography.lineHeight.snug,
      fontWeight: typography.fontWeights.semibold,
      letterSpacing: typography.letterSpacing.subtle,
    },
    // Subsection headings
    h3: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSizes["2xl"],
      lineHeight: typography.lineHeight.snug,
      fontWeight: typography.fontWeights.semibold,
    },
    // Component or container headings
    h4: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSizes["xl"],
      lineHeight: typography.lineHeight.normal,
      fontWeight: typography.fontWeights.medium,
    },
    // Small section labels or group headings
    h5: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSizes["lg"],
      lineHeight: typography.lineHeight.normal,
      fontWeight: typography.fontWeights.medium,
      letterSpacing: typography.letterSpacing.wide,
    },
  },
  body: {
    // For highlighted text sections, introductory paragraphs
    large: {
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSizes.lg,
      lineHeight: typography.lineHeight.normal,
      fontWeight: typography.fontWeights.regular,
    },
    // Standard body text
    default: {
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSizes.base,
      lineHeight: typography.lineHeight.normal,
      fontWeight: typography.fontWeights.regular,
    },
    // Supporting text, captions, metadata
    small: {
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSizes.sm,
      lineHeight: typography.lineHeight.normal,
      fontWeight: typography.fontWeights.regular,
    },
  },
  inline: {
    link: {
      fontFamily: typography.fontFamily.body,
      fontSize: "inherit",
      lineHeight: "inherit",
      fontWeight: typography.fontWeights.medium,
      textDecoration: "underline",
    },
    // For emphasis within body text
    strong: {
      fontFamily: typography.fontFamily.body,
      fontSize: "inherit",
      lineHeight: "inherit",
      fontWeight: typography.fontWeights.semibold,
    },
    // For button labels
    button: {
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSizes.base,
      lineHeight: typography.lineHeight.none,
      fontWeight: typography.fontWeights.medium,
      letterSpacing: typography.letterSpacing.wide,
    },
  },
} as const;
