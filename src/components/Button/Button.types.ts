import { semanticColors } from "@/tokens/semantic/colors";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = keyof typeof semanticColors.status;

export interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
}
