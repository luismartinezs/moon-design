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
      d="M11.357 27a.5.5 0 001 0h-1zm1-1.443a.5.5 0 10-1 0h1zM20.643 27a.5.5 0 101 0h-1zm1-1.443a.5.5 0 10-1 0h1zM9.5 22.8a.5.5 0 00-1 0h1zM12 4.5a.5.5 0 000 1v-1zm9 1a.5.5 0 000-1v1zM8.5 19a.5.5 0 001 0h-1zm3.857-1.797a.5.5 0 101 0h-1zm1-6.299a.5.5 0 10-1 0h1zm-1 11.548a.5.5 0 101 0h-1zm1-.972a.5.5 0 10-1 0h1zM16 15.5a.5.5 0 001 0h-1zm1-4.596a.5.5 0 10-1 0h1zm-1 11.548a.5.5 0 001 0h-1zm1-2.731a.5.5 0 10-1 0h1zm2.643-6.221a.5.5 0 001 0h-1zm1-2.596a.5.5 0 10-1 0h1zm-1 11.548a.5.5 0 101 0h-1zm1-4.452a.5.5 0 10-1 0h1zm2.857-6a.5.5 0 001 0h-1zm1 4.34a.5.5 0 10-1 0h1zM6.28 20.05a.5.5 0 00.44.9l-.44-.9zm20.94-9.1a.5.5 0 10-.44-.9l.44.9zM12.356 27v-1.443h-1V27h1zm9.286 0v-1.443h-1V27h1zM20.214 7.885V5.507h-1v2.378h1zm-7.428-2.378v2.378h1V5.507h-1zm-1.298 2.947h10.024v-1H11.488v1zm10.024 0c1.102 0 1.988.884 1.988 1.965h1c0-1.642-1.342-2.965-2.988-2.965v1zM23.5 22.8a1.977 1.977 0 01-1.988 1.965v1c1.646 0 2.988-1.323 2.988-2.965h-1zm-1.988 1.965H11.488v1h10.024v-1zm-10.024 0A1.977 1.977 0 019.5 22.8h-1c0 1.642 1.342 2.965 2.988 2.965v-1zM9.5 10.42c0-1.081.886-1.965 1.988-1.965v-1c-1.646 0-2.988 1.323-2.988 2.965h1zM12 5.5h9v-1h-9v1zM9.5 19v-8.58h-1V19h1zm3.857-1.797v-6.299h-1v6.299h1zm0 5.25v-.973h-1v.972h1zM17 15.5v-4.596h-1V15.5h1zm0 6.952v-2.731h-1v2.731h1zm3.643-8.952v-2.596h-1V13.5h1zm0 8.952V18h-1v4.452h1zM23.5 10.42V12h1v-1.58h-1zm0 5.921v6.46h1v-6.46h-1zM6.72 20.95l20.5-10-.44-.9-20.5 10 .44.9z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TravelNoSuitcase =
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
export default TravelNoSuitcase;
