import { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import { userEvent, within, waitFor, expect, fn } from "@storybook/test";

export default {
  component: Button,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    content: "Mes références",
    onClick: fn(),
  },
};

export const Clicked: StoryObj<typeof Button> = {
  args: { ...Default.args },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Mes références"));
    await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(1));
  },
};

export const Primary: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    mode: "primary",
  },
};

export const Light: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    mode: "light",
  },
};

export const Big: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    mode: "primary",
    size: "big",
  },
};
