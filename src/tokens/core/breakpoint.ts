export type BreakpointTokens = Record<string, string>;

export const breakpoint: BreakpointTokens = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;
