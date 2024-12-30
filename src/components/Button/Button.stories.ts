import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "default",
    size: "medium",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "subtle",
        "warning",
        "danger",
        "discovery",
      ],
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
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    size: "medium",
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    size: "medium",
    variant: "primary",
  },
};
export const Subtle: Story = {
  args: {
    children: "Subtle Button",
    size: "medium",
    variant: "subtle",
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
