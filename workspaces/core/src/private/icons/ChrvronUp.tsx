import React from "react";

const ChevronUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1.2em"
    height="1.2em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 20.5l9-9 9 9"
      stroke="#999ca0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronUp;
