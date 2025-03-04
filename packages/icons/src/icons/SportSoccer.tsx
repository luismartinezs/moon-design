import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.236 11.727s-1.004 2.27-1.157 3.71c0 0 1.397 1.877 2.685 2.99l3.905-.85s.96-1.681 1.116-3.745m-6.55-2.105c2.118-.786 3.95-.873 3.95-.873m-3.95.873c-1.148-1.171-2.633-1.651-2.633-1.651m9.183 3.756s-1.028-1.887-2.6-2.978m2.6 2.978l2.628-.675m-5.228-2.303l1.07-2.4m4.158 4.703s-.01-2.085-.742-3.252c0 0-.623-.993-3.415-1.452m4.157 4.704s1.2 1.033 1.488 3.146c0 0-.538 3.87-3.885 4.365m-1.76-12.215C18.31 6.89 16.52 6.514 16.52 6.514m-3.268.39s-1.286 1.513-1.65 3.172m0 0S9.466 11.2 8.825 12.668c0 0-.103 1.558.799 3.33l3.455-.562M9.624 16s-.975 1.729-.699 3.286c0 0 .844 2.226 2.56 3.055m0 0s1.63.102 3.405-.567m-3.405.567s-.262.834-.093 1.97m3.498-2.537s.51-2.576.873-3.347m-.873 3.347s2.008 1.324 3.173 1.41M7.2 12.413s.586-.052 1.62.08m-1.733 6.805l1.788-.123m9.187 4.01s2.284-.989 2.953-2.516m-2.953 2.517s.043 1.463-.11 2.114m3.063-4.631s-.742-2.255-1.345-3.092m3.613 1.977s.492.833.218 2.276M25.5 16a9.5 9.5 0 11-19 0 9.5 9.5 0 0119 0z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportSoccer =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]);
export default SportSoccer;
