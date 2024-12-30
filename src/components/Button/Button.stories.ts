import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
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
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Button",
    size: "medium",
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    label: "Button",
    size: "medium",
    variant: "primary",
  },
};
export const Subtle: Story = {
  args: {
    label: "Button",
    size: "medium",
    variant: "subtle",
  },
};
export const Warning: Story = {
  args: {
    label: "Button",
    size: "medium",
    variant: "warning",
  },
};
export const Danger: Story = {
  args: {
    label: "Button",
    size: "medium",
    variant: "danger",
  },
};
export const Discovery: Story = {
  args: {
    label: "Button",
    size: "medium",
    variant: "discovery",
  },
};
export const Small: Story = {
  args: {
    label: "Button",
    size: "small",
    variant: "primary",
  },
};
export const Medium: Story = {
  args: {
    label: "Button",
    size: "medium",
    variant: "primary",
  },
};
export const Large: Story = {
  args: {
    label: "Button",
    size: "large",
    variant: "primary",
  },
};
