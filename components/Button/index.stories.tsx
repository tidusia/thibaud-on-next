import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Button from ".";
import { userEvent, within } from "@storybook/testing-library";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    content: "Mes références",
    onClick: action("Clicked !"),
  },
};

export const Clicked: ComponentStoryObj<typeof Button> = {
  args: { ...Default.args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Mes références"));
  },
};

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    ...Default.args,
    mode: "primary",
  },
};

export const Light: ComponentStoryObj<typeof Button> = {
  args: {
    ...Default.args,
    mode: "light",
  },
};

export const Big: ComponentStoryObj<typeof Button> = {
  args: {
    ...Default.args,
    mode: "primary",
    size: "big",
  },
};
