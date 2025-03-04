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
      d="M11.385 14.539a.5.5 0 10-1 0h1zm-1 10.961a.5.5 0 001 0h-1zm1-19a.5.5 0 10-1 0h1zm-1 2.923a.5.5 0 001 0h-1zm11.23 13.154a.5.5 0 00-1 0h1zm-1 2.923a.5.5 0 101 0h-1zm1-19a.5.5 0 00-1 0h1zm-1 10.962a.5.5 0 101 0h-1zm-10.23-2.923V25.5h1V14.539h-1zm0-8.039v2.923h1V6.5h-1zm10.23 16.077V25.5h1v-2.923h-1zm0-16.077v10.962h1V6.5h-1zM8.5 9.923h4.77v-1H8.5v1zm6.27 1.5v1.116h1v-1.116h-1zm-1.5 2.616H8.5v1h4.77v-1zM7 12.539v-1.116H6v1.116h1zm1.5 1.5a1.5 1.5 0 01-1.5-1.5H6a2.5 2.5 0 002.5 2.5v-1zm6.27-1.5a1.5 1.5 0 01-1.5 1.5v1a2.5 2.5 0 002.5-2.5h-1zm-1.5-2.616a1.5 1.5 0 011.5 1.5h1a2.5 2.5 0 00-2.5-2.5v1zm-4.77-1a2.5 2.5 0 00-2.5 2.5h1a1.5 1.5 0 011.5-1.5v-1zm10.23 9.039h4.77v-1h-4.77v1zm6.27 1.5v1.115h1V19.46h-1zm-1.5 2.615h-4.77v1h4.77v-1zm-6.27-1.5V19.46h-1v1.116h1zm1.5 1.5a1.5 1.5 0 01-1.5-1.5h-1a2.5 2.5 0 002.5 2.5v-1zm6.27-1.5a1.5 1.5 0 01-1.5 1.5v1a2.5 2.5 0 002.5-2.5h-1zm-1.5-2.616a1.5 1.5 0 011.5 1.5h1a2.5 2.5 0 00-2.5-2.5v1zm-4.77-1a2.5 2.5 0 00-2.5 2.5h1a1.5 1.5 0 011.5-1.5v-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaTuner =
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
export default MediaTuner;
