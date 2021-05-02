import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import DotsGrid, { Props } from ".";

export default {
  title: "DotsGrid",
  component: DotsGrid,
} as Meta;

const Template: Story<Props> = (args) => <DotsGrid {...args} />;

export const Default = Template.bind({});
Default.args = {};
