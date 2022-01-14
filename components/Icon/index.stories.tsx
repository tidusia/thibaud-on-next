import React from "react";
import Icon, { IconName, IconProps } from "./index";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "padded",
  },
} as ComponentMeta<typeof Icon>;

const renderIcon = (name: IconName, props?: IconProps): JSX.Element => (
  <div className="m-4 p-4 flex flex-col items-center border rounded">
    <Icon className="h-6 w-6" name={name} {...props} />
    <p className="mt-2">{name}</p>
  </div>
);

export const AllIcons = () => (
  <div className="text-blue-500">
    <h1 className="text-h1 leading-h1 mb-8">SVG React Component Icons</h1>

    <div className="flex flex-wrap">
      {renderIcon("Cross")}
      {renderIcon("Menu")}
    </div>
  </div>
);
