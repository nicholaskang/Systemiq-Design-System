import { iconSizes } from "../../core/iconSize";

export const semanticIcons = {
  // For different text contexts
  inline: {
    text: iconSizes.sm, // Icons within body text
    heading: iconSizes.lg, // Icons within headings
  },
  // For different UI components
  ui: {
    button: iconSizes.sm, // Icons in buttons
    navigation: iconSizes.md, // Icons in nav items
    input: iconSizes.md, // Form input icons
    alert: iconSizes.md, // Alert/notification icons
    badge: iconSizes.xs, // Small indicator icons
    illustration: iconSizes.xl, // Feature illustrations
  },
  // For different button sizes
  button: {
    sm: iconSizes.sm,
    md: iconSizes.md,
    lg: iconSizes.lg,
  },
} as const;
