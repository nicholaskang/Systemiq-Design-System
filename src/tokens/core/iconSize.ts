export type IconSizeTokens = Record<string, string>;

export const iconSizes: IconSizeTokens = {
  xs: "12px", // For inline text or dense UIs
  sm: "16px", // Default size, matches base font
  md: "20px", // Medium emphasis
  lg: "24px", // High emphasis
  xl: "32px", // Featured icons
  "2xl": "40px", // Hero sections
} as const;
