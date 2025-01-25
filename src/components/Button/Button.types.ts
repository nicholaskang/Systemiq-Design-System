export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant =
  | "default"
  | "primary"
  | "warning"
  | "danger"
  | "success"
  // | "info"
  | "discovery";

export interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
}
