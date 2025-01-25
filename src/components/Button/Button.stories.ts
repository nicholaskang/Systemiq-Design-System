import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "primary",
    size: "medium",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "warning", "danger", "discovery", "neutral"],
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
    variant: "primary",
  },
};
export const Warning: Story = {
  args: {
    children: "Warning Button",
    size: "medium",
    variant: "warning",
  },
};
export const Danger: Story = {
  args: {
    children: "Danger Button",
    size: "medium",
    variant: "danger",
  },
};
export const Discovery: Story = {
  args: {
    children: "Discovery Button",
    size: "medium",
    variant: "discovery",
  },
};
export const Neutral: Story = {
  args: {
    children: "Neutral Button",
    size: "medium",
    variant: "neutral",
  },
};
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    size: "medium",
    variant: "neutral",
    disabled: true,
  },
};
export const Loading: Story = {
  args: {
    children: "Loading Button",
    size: "medium",
    variant: "primary",
    isLoading: true,
  },
};
export const Small: Story = {
  args: {
    children: "Small Button",
    size: "small",
    variant: "primary",
  },
};
export const Medium: Story = {
  args: {
    children: "Medium Button",
    size: "medium",
    variant: "primary",
  },
};
export const Large: Story = {
  args: {
    children: "Large Button",
    size: "large",
    variant: "primary",
  },
};
