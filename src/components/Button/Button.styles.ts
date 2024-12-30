import styled from "@emotion/styled";
import { ButtonProps } from "./Button.types";

export const Button = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};

  // Size styles
  ${({ theme, size = "medium" }) => {
    switch (size) {
      case "small":
        return `
          font-size: ${theme.typography.size.sm};
          padding: ${theme.spacing[1]} ${theme.spacing[2]};
          height: ${theme.spacing[6]};
        `;
      case "large":
        return `
          font-size: ${theme.typography.size.lg};
          padding: ${theme.spacing[3]} ${theme.spacing[4]};
          height: ${theme.spacing[10]};
        `;
      default:
        return `
          font-size: ${theme.typography.size.base};
          padding: ${theme.spacing[2]} ${theme.spacing[3]};
          height: ${theme.spacing[8]};
        `;
    }
  }}

  border-radius: ${({ theme }) => theme.radius.md};

  // Variant styles
  ${({ theme, variant = "default" }) => {
    const status = theme.semanticColors.status[variant];
    return `
      background-color: ${status.background};
      color: ${status.buttonText};
      border-color: ${status.border};

      &:hover:not(:disabled) {
        background-color: ${status.hover};
        border-color: ${status.hover};
      }

      &:active:not(:disabled) {
        background-color: ${status.active};
        border-color: ${status.active};
      }

      &:focus-visible {
        outline: 2px solid ${theme.semanticColors.focus.border};
        outline-offset: 2px;
      }
    `;
  }}

  // Disabled state
  &:disabled {
    background-color: ${({ theme, variant = "default" }) =>
      theme.semanticColors.status[variant].disabled};
    border-color: transparent;
    cursor: not-allowed;
    color: ${({ theme }) => theme.semanticColors.text.tertiary};
  }

  &[data-loading="true"] {
    cursor: wait;
    position: relative;
    > * {
      opacity: 0;
    }
  }
}`;
