import styled from "@emotion/styled";
import { spacing } from "../../tokens/core/spacing";
import { radius } from "../../tokens/core/radius";
import { semanticTypography as typography } from "../../tokens/semantic/typography";
import { ButtonProps } from "./Button.types";

// TODO: Update tokens to use semantic tokens, apply proper colors/overall styles

export const Button = styled.button<ButtonProps>`
  // Base styles
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  gap: ${spacing[2]};
  border-radius: ${radius.md};
  font-family: ${typography.inline.button.fontFamily};
  font-weight: ${typography.inline.button.fontWeight};

  // Size styles
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

  // Intent styles
  ${({ theme, intent = "primary" }) => {
    const intent = theme.semanticColors.intent[intent];
    return `
      background-color: ${intent.background};
      color: ${intent.buttonText};
      border-color: ${intent.border};

      &:hover:not(:disabled) {
        background-color: ${intent.hover};
        border-color: ${intent.hover};
      }

      &:active:not(:disabled) {
        background-color: ${intent.active};
        border-color: ${intent.active};
      }

      &:focus-visible {
        outline: 2px solid ${theme.semanticColors.focus.border};
        outline-offset: 2px;
      }
    `;
  }}

  // Pressed state
  &:active {
    transform: scale(0.95);
  }

  // Disabled state
  &:disabled {
    background-color: ${({ theme, intent = "primary" }) =>
      theme.semanticColors.intent[intent].background};
    border-color: ${({ theme, intent = "primary" }) =>
      theme.semanticColors.intent[intent].border};
    cursor: not-allowed;
    color: ${({ theme }) => theme.semanticColors.disabled.text};
    opacity: 0.6;
    pointer-events: none;
  }

  // Loading state
  ${({ isLoading }) =>
    isLoading &&
    `
    opacity: 0.8;
    pointer-events: none;
  `}
`;
