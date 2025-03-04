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
      d="M9.467 13.9l1.643 1.712c.216.244.488.394.812.429l3.133.333m3.952-1.338l5.498-5.421c.448-.442 1.177-.425 1.629.039a1.223 1.223 0 01-.026 1.703l-4.759 4.665a1.361 1.361 0 00-.34 1.336l2.71 7.766m-6.61-.021l-1.548-5.31a1.303 1.303 0 00-1.073-.91l-3.372-.377a1.172 1.172 0 01-.765-.389l-2.926-2.863c-.335-.365-.386-.89-.215-1.326m.626-7.378c1.458-.075 2.707 1.085 2.79 2.59.081 1.506-1.034 2.788-2.492 2.864-1.458.075-2.706-1.085-2.788-2.59-.083-1.507 1.033-2.788 2.49-2.864zM18.5 11.238c.16 1.637-.994 3.09-2.579 3.246-1.585.156-3-1.046-3.16-2.683-.161-1.638.993-3.091 2.578-3.247 1.585-.155 3 1.046 3.16 2.684z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.727 24.665a2.425 2.425 0 00-3.181-.01l-.219.19a2.758 2.758 0 01-3.56.038l-.126-.104a2.836 2.836 0 00-3.66.04 2.835 2.835 0 01-3.602.087l-.21-.163a3.158 3.158 0 00-3.877-.013l-.234.182a2.879 2.879 0 01-3.593-.059l-.293-.242c-.974-.8-2.39-.74-3.283.139"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportWaterpolo =
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
export default SportWaterpolo;
