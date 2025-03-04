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
      d="M19.18 25.5V25v.5zm-6.36 0v.5-.5zm11.716-12.373a.5.5 0 10-.995-.1l.995.1zm-1.376 8.77l.498.049-.498-.05zm-14.7-8.87a.5.5 0 00-.996.1l.995-.1zm.38 8.87l-.498.049.497-.05zm7.66-3.705a.5.5 0 00-1 0h1zm-1 2.923a.5.5 0 001 0h-1zm4.654-2.923a.5.5 0 10-1 0h1zm-1 2.923a.5.5 0 001 0h-1zm-6.308-2.923a.5.5 0 00-1 0h1zm-1 2.923a.5.5 0 101 0h-1zm2.43-14.44a.5.5 0 00-.936-.35l.936.35zm-3.129 5.496a.5.5 0 10.937.35l-.937-.35zm-4.647.406a.5.5 0 000 1v-1zm19 1a.5.5 0 100-1v1zm-6.84-7.253a.5.5 0 00-.936.352l.936-.352zm1.256 6.198a.5.5 0 10.937-.351l-.937.35zM19.18 25h-6.36v1h6.36v-1zm4.36-11.973l-.877 8.82.995.099.878-8.82-.995-.099zm-16.076.1l.878 8.819.995-.1-.878-8.819-.995.1zM12.82 25a3.5 3.5 0 01-3.483-3.153l-.995.099A4.5 4.5 0 0012.82 26v-1zm6.36 1a4.5 4.5 0 004.478-4.054l-.995-.1A3.5 3.5 0 0119.18 25v1zm-3.68-7.808v2.923h1v-2.923h-1zm3.654 0v2.923h1v-2.923h-1zm-7.308 0v2.923h1v-2.923h-1zM13.34 6.324l-2.193 5.847.937.35 2.192-5.845-.936-.352zM6.5 13.577h19v-1h-19v1zm11.224-6.901l2.192 5.846.937-.351-2.193-5.847-.936.352z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ShopBasket =
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
export default ShopBasket;
