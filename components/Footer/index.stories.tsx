import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Footer, { Props } from ".";

export default {
  component: Footer,
} as Meta;

const Template: Story<Props> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
