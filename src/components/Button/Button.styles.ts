import styled from "@emotion/styled";
import { ButtonProps } from "./Button.types";

export const Button = styled.button<ButtonProps>`
  // Base styles
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  gap: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.md};
  font-family: ${({ theme }) => theme.typography.inline.button.fontFamily};
  font-weight: ${({ theme }) => theme.typography.inline.button.fontWeight};

  // Size variants
  ${({ theme, size = "medium" }) => {
    switch (size) {
      case "small":
        return `
          font-size: ${theme.typography.inline.button.fontSize};
          padding: ${theme.spacing[1]} ${theme.spacing[2]};
          height: ${theme.spacing[6]};
        `;
      case "large":
        return `
          font-size: ${theme.typography.inline.button.fontSize};
          padding: ${theme.spacing[3]} ${theme.spacing[4]};
          height: ${theme.spacing[10]};
        `;
      default:
        return `
          font-size: ${theme.typography.inline.button.fontSize};
          padding: ${theme.spacing[2]} ${theme.spacing[3]};
          height: ${theme.spacing[8]};
        `;
    }
  }}

  // Status/Variant styles
  ${({ theme, variant = "primary" }) => {
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
    background-color: ${({ theme }) =>
      theme.semanticColors.disabled.background};
    border-color: ${({ theme }) => theme.semanticColors.disabled.border};
    cursor: not-allowed;
    color: ${({ theme }) => theme.semanticColors.disabled.text};
    opacity: 0.6;
    pointer-events: none;
  }

  // Loading state
  &[data-loading="true"] {
    cursor: wait;
    position: relative;

    > * {
      opacity: 0;
    }
  }
`;
