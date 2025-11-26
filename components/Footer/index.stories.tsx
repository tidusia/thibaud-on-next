import { Meta, StoryObj } from "@storybook/nextjs";
import Footer from ".";

export default {
  component: Footer,
  parameters: {
    layout: "none",
  },
} as Meta<typeof Footer>;

export const Default: StoryObj<typeof Footer> = {
  args: {},
};
