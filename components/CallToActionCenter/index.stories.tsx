import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import CallToActionCenter, { Props } from ".";

export default {
  title: "CallToActionCenter",
  component: CallToActionCenter,
} as Meta;

const Template: Story<Props> = (args) => <CallToActionCenter {...args} />;

export const Default = Template.bind({});
Default.args = { title: "On travaille ensemble ?" };
