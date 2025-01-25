import { colors } from "../../core/colors";

export const lightColors = {
  // Used for container and surface hierarchy throughout the application
  background: {
    primary: colors.white,
    secondary: colors.gray[50],
    tertiary: colors.gray[100],
    inverse: colors.gray[900],
  },
  text: {
    primary: colors.gray[900],
    secondary: colors.gray[700],
    tertiary: colors.gray[500],
    inverse: colors.white,
  },
  border: {
    default: colors.gray[200],
    strong: colors.gray[300],
    inverse: colors.gray[800],
  },
  // Interactive and informational state colors for components and feedback
  status: {
    // For subtle, less prominent interactive elements
    default: {
      background: colors.gray[100],
      hover: colors.gray[200],
      active: colors.gray[300],
      disabled: colors.gray[50],
      text: colors.gray[900],
      buttonText: colors.gray[900],
      border: colors.gray[300],
      icon: colors.gray[500],
    },
    // Main interactive elements like primary buttons
    primary: {
      background: colors.blue[500],
      hover: colors.blue[800],
      active: colors.blue[900],
      disabled: colors.gray[200],
      text: colors.blue[800],
      buttonText: colors.white,
      border: colors.blue[700],
      icon: colors.blue[600],
    },
    // High-visibility destructive actions or errors
    danger: {
      background: colors.red[500],
      hover: colors.red[800],
      active: colors.red[900],
      disabled: colors.red[100],
      text: colors.red[800],
      buttonText: colors.white,
      border: colors.red[700],
      icon: colors.red[600],
    },
    // Cautionary alerts or important notices
    warning: {
      background: colors.yellow[500],
      hover: colors.yellow[800],
      active: colors.yellow[900],
      disabled: colors.yellow[100],
      text: colors.yellow[900],
      buttonText: colors.black,
      border: colors.yellow[700],
      icon: colors.yellow[600],
    },
    // Positive confirmation or success messages
    success: {
      background: colors.green[500],
      hover: colors.green[800],
      active: colors.green[900],
      disabled: colors.green[100],
      text: colors.green[800],
      buttonText: colors.white,
      border: colors.green[700],
      icon: colors.green[600],
    },
    // General information or updates
    info: {
      background: colors.blue[500],
      hover: colors.blue[800],
      active: colors.blue[900],
      disabled: colors.blue[100],
      text: colors.blue[800],
      buttonText: colors.white,
      border: colors.blue[700],
      icon: colors.blue[600],
    },
    // New features or learning opportunities
    discovery: {
      background: colors.purple[500],
      hover: colors.purple[800],
      active: colors.purple[900],
      disabled: colors.purple[100],
      text: colors.purple[800],
      buttonText: colors.white,
      border: colors.purple[700],
      icon: colors.purple[600],
    },
  },
  disabled: {
    background: colors.gray[100],
    hover: colors.gray[100],
    active: colors.gray[100],
    text: colors.gray[400],
    border: colors.gray[200],
    icon: colors.gray[300],
  },
  focus: {
    shadow: colors.blue[200],
    border: colors.blue[500],
  },
} as const;
