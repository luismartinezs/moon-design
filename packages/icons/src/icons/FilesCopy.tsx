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
      d="M8.5 10.685l-.356-.35a.5.5 0 00-.144.35h.5zM12.627 6.5V6a.5.5 0 00-.356.149l.356.351zm7.565 2h-.5.5zm0 11.346h.5-.5zm0-10.192a.5.5 0 000 1v-1zm3.654 2.5h-.5.5zm0 11.346h.5-.5zm-11.192-1.654a.5.5 0 00-1 0h1zm1.461-14.615a.5.5 0 00-1 0h1zm-.5 4.384v.5a.5.5 0 00.5-.5h-.5zm-4.384-.5a.5.5 0 000 1v-1zm-.375-.079l4.127-4.185-.712-.702-4.127 4.185.712.702zm1.644 11.31h7.692v-1H10.5v1zM12.627 7h5.565V6h-5.565v1zm7.065 1.5v11.346h1V8.5h-1zM8 10.685v9.161h1v-9.16H8zm2.5 10.661a1.5 1.5 0 01-1.5-1.5H8a2.5 2.5 0 002.5 2.5v-1zm7.692 1a2.5 2.5 0 002.5-2.5h-1a1.5 1.5 0 01-1.5 1.5v1zm0-15.346a1.5 1.5 0 011.5 1.5h1a2.5 2.5 0 00-2.5-2.5v1zm-4.038 19h7.692v-1h-7.692v1zm6.038-15.346h1.654v-1h-1.654v1zm3.154 1.5V23.5h1V12.154h-1zm-11.692 9.692V23.5h1v-1.654h-1zm2.5 3.154a1.5 1.5 0 01-1.5-1.5h-1a2.5 2.5 0 002.5 2.5v-1zm7.692 1a2.5 2.5 0 002.5-2.5h-1a1.5 1.5 0 01-1.5 1.5v1zm0-15.346a1.5 1.5 0 011.5 1.5h1a2.5 2.5 0 00-2.5-2.5v1zm-8.73-3.423v4.384h1V7.231h-1zm.5 3.884H9.23v1h4.384v-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesCopy =
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
export default FilesCopy;
