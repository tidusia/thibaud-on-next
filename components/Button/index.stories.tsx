import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Button from ".";
import { userEvent, within, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: true },
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    content: "Mes références",
  },
};

export const Clicked: ComponentStoryObj<typeof Button> = {
  args: { ...Default.args },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Mes références"));
    await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(1));
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
