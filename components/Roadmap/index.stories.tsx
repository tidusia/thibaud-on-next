import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Roadmap from ".";
import { DOMAINS } from "./data";

export default {
  title: "Components/Roadmap",
  component: Roadmap,
  decorators: [(story) => <div>{story()}</div>],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Roadmap>;

export const Default: ComponentStoryObj<typeof Roadmap> = {
  args: {
    domains: DOMAINS,
  },
};
