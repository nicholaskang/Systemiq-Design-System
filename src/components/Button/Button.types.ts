export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant =
  | "primary"
  | "warning"
  | "danger"
  | "discovery"
  | "neutral";

export interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
}
