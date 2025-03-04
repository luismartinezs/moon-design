import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

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
      d="M26.5 22.375c0 1.174-.786 2.125-1.756 2.125H8.563m0-17h16.18c.97 0 1.757.951 1.757 2.125v1.098c0 .197-.16.352-.353.392a1.78 1.78 0 00-1.397 1.753c0 .865.6 1.586 1.397 1.753.192.04.353.196.353.392v1.973c0 .197-.16.352-.353.392a1.78 1.78 0 00-1.397 1.754c0 .864.6 1.586 1.397 1.753.192.04.353.195.353.392v.986m-21 .112c0 1.174.786 2.125 1.756 2.125h1.738m0-17H7.256c-.97 0-1.756.951-1.756 2.125v1.098c0 .197.16.352.353.392a1.78 1.78 0 011.397 1.753c0 .865-.6 1.586-1.397 1.753-.192.04-.353.196-.353.392v1.973c0 .197.16.352.353.392a1.78 1.78 0 011.397 1.754c0 .864-.6 1.586-1.397 1.753-.192.04-.353.195-.353.392v.986m14.219 1.566v-1.342m0-2.237v-1.342m0-2.237V15.33m0-2.237V11.75m0-2.237V8.171"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericBetslip =
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
export default GenericBetslip;
