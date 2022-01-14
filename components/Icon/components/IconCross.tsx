import React, { FunctionComponent } from "react";

const IconCross: FunctionComponent<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default IconCross;
