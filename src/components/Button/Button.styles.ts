import styled from "@emotion/styled";
import { ButtonProps } from "./Button";

export const Button = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  // Size styles
  ${({ theme, size = "medium" }) => {
    switch (size) {
      case "small":
        return `
          font-size: ${theme.fontSizes.sm};
          padding: ${theme.space[1]} ${theme.space[2]};
        `;
      case "large":
        return `
          font-size: ${theme.fontSizes.lg};
          padding: ${theme.space[3]} ${theme.space[4]};
        `;
      default:
        return `
          font-size: ${theme.fontSizes.md};
          padding: ${theme.space[2]} ${theme.space[3]};
        `;
    }
  }}

  border-radius: ${({ theme }) => theme.radii.md};

  // Variant styles
  ${({ theme, variant = "default" }) => {
    const colors = theme.colors.button[variant];
    return `
      background-color: ${colors.bg};
      color: ${colors.text};

      &:hover {
        background-color: ${colors.hover};
      }

      &:active {
        background-color: ${colors.active};
      }
    `;
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
