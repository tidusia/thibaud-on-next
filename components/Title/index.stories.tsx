import { Meta, StoryObj } from "@storybook/react";
import Title from ".";
import { within } from "@storybook/testing-library";

export default {
  component: Title,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Title>;

export const H1: StoryObj<typeof Title> = {
  args: {
    level: "h1",
    as: "h1",
    mainText: "Hello",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Hello");
  },
};

export const WithSecondText: StoryObj<typeof Title> = {
  args: {
    level: "h1",
    as: "h1",
    mainText: "Hello",
    secondText: "\nWorld",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Hello");
    await canvas.findByText("World");
  },
};
