type SurfaceColors = {
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
  };
  border: {
    default: string;
    strong: string;
    inverse: string;
  };
};

type IntentVariant = {
  background: string;
  hover: string;
  active: string;
  disabled: string;
  text: string;
  buttonText: string;
  border: string;
  icon: string;
};

type IntentColors = {
  primary: IntentVariant;
  warning: IntentVariant;
  danger: IntentVariant;
  success: IntentVariant;
  info: IntentVariant;
  neutral: IntentVariant;
};

export type ThemeColors = {
  surfaces: SurfaceColors;
  intent: IntentColors;
};
