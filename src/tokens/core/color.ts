export type ColorScale = Record<number, string>;

export type ColorTokens = {
  gray: ColorScale;
  blue: ColorScale;
  yellow: ColorScale;
  red: ColorScale;
  purple: ColorScale;
  green: ColorScale;
  white: string;
  black: string;
  transparent: string;
};

export const color: ColorTokens = {
  gray: {
    50: "#f7f7f7",
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
  },
  blue: {
    50: "#e6f0ff",
    100: "#cce0ff",
    200: "#99c2ff",
    300: "#66a3ff",
    400: "#3385ff",
    500: "#0052cc",
    600: "#0047b3",
    700: "#003d99",
    800: "#003380",
    900: "#002966",
  },
  yellow: {
    50: "#fff8e6",
    100: "#ffefc4",
    200: "#ffdb85",
    300: "#ffc847",
    400: "#ffb41f",
    500: "#ffab00",
    600: "#e69900",
    700: "#cc8800",
    800: "#b37700",
    900: "#996600",
  },
  red: {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#d32f2f",
    600: "#c62828",
    700: "#b71c1c",
    800: "#a31515",
    900: "#8b0000",
  },
  purple: {
    50: "#f3f0ff",
    100: "#e4deff",
    200: "#c5b8ff",
    300: "#a193ff",
    400: "#8273e6",
    500: "#6554c0",
    600: "#5849a9",
    700: "#4a3f92",
    800: "#3d347b",
    900: "#2f2864",
  },
  green: {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#089c10",
    600: "#078d0f",
    700: "#067d0d",
    800: "#056e0c",
    900: "#045e0a",
  },
  white: "#ffffff",
  black: "#1a1a1a",
  transparent: "transparent",
} as const;
