import { ThemeColors } from "../base/colors";
import { color } from "../../core/color";

export const lightColors: ThemeColors = {
  // Used for container and surface hierarchy throughout the application
  surfaces: {
    background: {
      primary: color.white,
      secondary: color.gray[50],
      tertiary: color.gray[100],
      inverse: color.gray[900],
    },
    text: {
      primary: color.gray[900],
      secondary: color.gray[700],
      tertiary: color.gray[500],
      inverse: color.white,
    },
    border: {
      default: color.gray[200],
      strong: color.gray[300],
      inverse: color.gray[800],
    },
  },
  // Semantic meaning and intent for components and feedback
  intent: {
    // Default interactive elements like primary buttons
    primary: {
      background: color.blue[500],
      hover: color.blue[800],
      active: color.blue[900],
      disabled: color.gray[200],
      text: color.blue[800],
      buttonText: color.white,
      border: color.blue[700],
      icon: color.blue[600],
    },
    // High-visibility destructive actions or errors
    danger: {
      background: color.red[500],
      hover: color.red[800],
      active: color.red[900],
      disabled: color.red[100],
      text: color.red[800],
      buttonText: color.white,
      border: color.red[700],
      icon: color.red[600],
    },
    // Cautionary alerts or important notices
    warning: {
      background: color.yellow[500],
      hover: color.yellow[800],
      active: color.yellow[900],
      disabled: color.yellow[100],
      text: color.yellow[900],
      buttonText: color.black,
      border: color.yellow[700],
      icon: color.yellow[600],
    },
    // Positive confirmation or success messages
    success: {
      background: color.green[500],
      hover: color.green[800],
      active: color.green[900],
      disabled: color.green[100],
      text: color.green[800],
      buttonText: color.white,
      border: color.green[700],
      icon: color.green[600],
    },
    // Informational updates, new features or learning opportunities
    info: {
      background: color.purple[500],
      hover: color.purple[800],
      active: color.purple[900],
      disabled: color.purple[100],
      text: color.purple[800],
      buttonText: color.white,
      border: color.purple[700],
      icon: color.purple[600],
    },
    // For subtle, less prominent interactive elements
    neutral: {
      background: color.gray[100],
      hover: color.gray[200],
      active: color.gray[300],
      disabled: color.gray[50],
      text: color.gray[900],
      buttonText: color.gray[900],
      border: color.gray[300],
      icon: color.gray[500],
    },
  },
} as const;
