export type ButtonSize = "small" | "medium" | "large";
export type ButtonIntent =
  | "primary"
  | "warning"
  | "danger"
  | "info"
  | "neutral";

export interface ButtonProps {
  size?: ButtonSize;
  intent?: ButtonIntent;
  disabled?: boolean;
  isLoading?: boolean;
}
