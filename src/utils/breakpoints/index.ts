import { breakpoints } from "../../../tokens/core/breakpoints";

export const media = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  xs: `@media (min-width: ${breakpoints.xs})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  "2xl": `@media (min-width: ${breakpoints["2xl"]})`,
};
