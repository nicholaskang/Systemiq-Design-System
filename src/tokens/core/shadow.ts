export type ShadowTokens = Record<string, string>;

export const shadow: ShadowTokens = {
  none: "none",
  sm: "0px 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  lg: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  xl: "0px 8px 10px rgba(0, 0, 0, 0.15)",
  "2xl": "0px 16px 24px rgba(0, 0, 0, 0.2)",
  inner: "inset 0px 2px 4px rgba(0, 0, 0, 0.1)",
} as const;

/** Usage Notes:
 * sm - Subtle shadow for small elements
 * md - Medium shadow for cards
 * lg - Large shadow for elevated elements
 * xl - Extra-large shadow for modals
 * 2xl - Highly elevated components
 * inner - Inner shadow
 */
