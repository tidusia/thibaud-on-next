import { ComponentMeta } from "@storybook/react";
import Nav from ".";

export default {
  component: Nav,
  decorators: [(story) => <div className="p-4">{story()}</div>],
} as ComponentMeta<typeof Nav>;

export const Default = {};
