import { Meta, StoryObj } from "@storybook/react";
import Nav from ".";

export default {
  component: Nav,
} as Meta<typeof Nav>;

export const Default: StoryObj<typeof Nav> = {
  args: {},
};
