export type ZIndexTokens = Record<string, number>;

export const zIndex: ZIndexTokens = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
} as const;
