import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "../src/styles/theme/theme";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
