import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    intent: "primary",
    size: "medium",
  },
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "warning", "danger", "info", "neutral"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    children: {
      control: "text",
      defaultValue: "Button",
      description: "Button text",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      description: "Disabled state",
    },
    isLoading: {
      control: "boolean",
      defaultValue: false,
      description: "Loading state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    size: "medium",
    intent: "primary",
  },
};
export const Warning: Story = {
  args: {
    children: "Warning Button",
    size: "medium",
    intent: "warning",
  },
};
export const Danger: Story = {
  args: {
    children: "Danger Button",
    size: "medium",
    intent: "danger",
  },
};
export const Info: Story = {
  args: {
    children: "Informational Button",
    size: "medium",
    intent: "info",
  },
};
export const Neutral: Story = {
  args: {
    children: "Neutral Button",
    size: "medium",
    intent: "neutral",
  },
};
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    size: "medium",
    intent: "neutral",
    disabled: true,
  },
};
export const Loading: Story = {
  args: {
    children: "Loading Button",
    size: "medium",
    intent: "primary",
    isLoading: true,
  },
};
export const Small: Story = {
  args: {
    children: "Small Button",
    size: "small",
    intent: "primary",
  },
};
export const Medium: Story = {
  args: {
    children: "Medium Button",
    size: "medium",
    intent: "primary",
  },
};
export const Large: Story = {
  args: {
    children: "Large Button",
    size: "large",
    intent: "primary",
  },
};
