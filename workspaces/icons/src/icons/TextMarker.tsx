import React from 'react';

const TextMarker = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.953 20.939l-1.402 1.403a1.49 1.49 0 000 2.106c.581.58 1.522.58 2.103 0l1.402-1.404m9.113-11.228l-3.855 3.86m-3.505 8.443l11.237-11.25a3.476 3.476 0 000-4.913 3.467 3.467 0 00-4.907 0L7.902 19.206l4.907 4.913z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TextMarker;
