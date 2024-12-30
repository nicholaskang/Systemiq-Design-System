import styled from "@emotion/styled";
import { ButtonProps } from "./Button";

export const Button = styled.button<ButtonProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${({ size }) => {
    switch (size) {
      case "small":
        return `
          font-size: 12px;
          padding: 10px 16px;
        `;
      case "large":
        return `
          font-size: 16px;
          padding: 12px 24px;
        `;
      default:
        return `
          font-size: 14px;
          padding: 11px 20px;
        `;
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `
          background-color: #0052cc;
          color: white;
        `;
      case "subtle":
        return `
          background-color: transparent;
          color: black;
        `;
      case "warning":
        return `
          background-color: #ffab00;
          color: black;
        `;
      case "danger":
        return `
          background-color: #d32f2f;
          color: white;
        `;
      case "discovery":
        return `
          background-color: #6554c0;
          color: white;
        `;
      default:
        return `
          background-color: #e0e0e0;
          color: black;
        `;
    }
  }}

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;
