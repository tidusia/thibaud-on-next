import { Meta, StoryObj } from "@storybook/react";
import Roadmap from "./index";
import { DOMAINS } from "./data";

export default {
  component: Roadmap,
  decorators: [(story) => <div>{story()}</div>],
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Roadmap>;

export const Default: StoryObj<typeof Roadmap> = {
  args: {
    domains: DOMAINS,
  },
};
