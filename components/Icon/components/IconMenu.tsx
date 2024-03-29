import React, { FunctionComponent } from "react";

const IconMenu: FunctionComponent<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export default IconMenu;
