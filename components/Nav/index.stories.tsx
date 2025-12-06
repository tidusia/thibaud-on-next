import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Nav from ".";

export default {
  component: Nav,
} as Meta<typeof Nav>;

export const Default: StoryObj<typeof Nav> = {
  args: {},
};
