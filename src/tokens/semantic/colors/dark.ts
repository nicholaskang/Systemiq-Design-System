import { colors } from "../../core/colors";

export const darkColors = {
  // Used for container and surface hierarchy throughout the application
  background: {
    primary: colors.gray[900],
    secondary: colors.gray[800],
    tertiary: colors.gray[700],
    inverse: colors.white,
  },
  text: {
    primary: colors.white,
    secondary: colors.gray[300],
    tertiary: colors.gray[400],
    inverse: colors.gray[900],
  },
  border: {
    default: colors.gray[700],
    strong: colors.gray[600],
    inverse: colors.gray[200],
  },
  status: {
    // For subtle, less prominent interactive elements
    default: {
      background: colors.gray[700],
      hover: colors.gray[600],
      active: colors.gray[500],
      disabled: colors.gray[800],
      text: colors.white,
      buttonText: colors.white,
      border: colors.gray[600],
      icon: colors.gray[400],
    },
    // Main interactive elements like primary buttons
    primary: {
      background: colors.blue[600],
      hover: colors.blue[500],
      active: colors.blue[400],
      disabled: colors.gray[800],
      text: colors.blue[200],
      buttonText: colors.white,
      border: colors.blue[500],
      icon: colors.blue[400],
    },
    // High-visibility destructive actions or errors
    danger: {
      background: colors.red[600],
      hover: colors.red[500],
      active: colors.red[400],
      disabled: colors.gray[800],
      text: colors.red[200],
      buttonText: colors.white,
      border: colors.red[500],
      icon: colors.red[400],
    },
    // Cautionary alerts or important notices
    warning: {
      background: colors.yellow[600],
      hover: colors.yellow[500],
      active: colors.yellow[400],
      disabled: colors.gray[800],
      text: colors.yellow[200],
      buttonText: colors.black,
      border: colors.yellow[500],
      icon: colors.yellow[400],
    },
    // Positive confirmation or success messages
    success: {
      background: colors.green[600],
      hover: colors.green[500],
      active: colors.green[400],
      disabled: colors.gray[800],
      text: colors.green[200],
      buttonText: colors.white,
      border: colors.green[500],
      icon: colors.green[400],
    },
    // General information or updates
    info: {
      background: colors.blue[600],
      hover: colors.blue[500],
      active: colors.blue[400],
      disabled: colors.gray[800],
      text: colors.blue[200],
      buttonText: colors.white,
      border: colors.blue[500],
      icon: colors.blue[400],
    },
    // New features or learning opportunities
    discovery: {
      background: colors.purple[600],
      hover: colors.purple[500],
      active: colors.purple[400],
      disabled: colors.gray[800],
      text: colors.purple[200],
      buttonText: colors.white,
      border: colors.purple[500],
      icon: colors.purple[400],
    },
  },
  focus: {
    shadow: colors.blue[700],
    border: colors.blue[400],
  },
} as const;
