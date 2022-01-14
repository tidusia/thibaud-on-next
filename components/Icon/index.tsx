import React, { FunctionComponent } from "react";
import IconCross from "./components/IconCross";
import IconMenu from "./components/IconMenu";

export type IconName = "Cross" | "Menu";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  name: IconName;
};

const Icon: FunctionComponent<IconProps> = ({ ...props }): JSX.Element => {
  switch (props.name) {
    case "Cross":
      return <IconCross {...props} />;
    case "Menu":
      return <IconMenu {...props} />;
  }
};

export default Icon;
