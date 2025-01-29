import { Theme as EmotionTheme } from "@emotion/react";
import { ThemeType } from "./base/theme";
import { lightTheme } from "./light";
import { darkTheme } from "./dark";

export { lightTheme, darkTheme };

declare module "@emotion/react" {
  interface Theme extends EmotionTheme, ThemeType {}
}

export type { ThemeType } from "./base/theme";
