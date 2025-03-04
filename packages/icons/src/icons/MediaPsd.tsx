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
      d="M7.875 10.228l.347.36.003-.003-.35-.357zM12.42 5.77l-.347-.36-.003.003.35.357zM21.538 26.5H10.462v1h11.076v-1zm-11.076 0c-1.623 0-2.962-1.355-2.962-3.055h-1c0 2.227 1.762 4.055 3.962 4.055v-1zM7.5 23.445V12.302h-1v11.143h1zm0-11.143c0-.652.263-1.272.722-1.714l-.694-.72A3.38 3.38 0 006.5 12.302h1zm.725-1.717l4.545-4.459-.7-.714-4.545 4.46.7.713zm4.542-4.456a2.23 2.23 0 011.548-.629v-1a3.23 3.23 0 00-2.242.91l.694.72zm1.548-.629h7.223v-1h-7.223v1zm7.223 0c1.623 0 2.962 1.355 2.962 3.055h1c0-2.227-1.762-4.055-3.962-4.055v1zM24.5 8.555v14.89h1V8.555h-1zm0 14.89c0 1.7-1.338 3.055-2.962 3.055v1c2.201 0 3.962-1.828 3.962-4.055h-1zM13.688 5.01v4.781h1v-4.78h-1zm0 4.781c0 .914-.718 1.633-1.577 1.633v1c1.437 0 2.577-1.192 2.577-2.633h-1zm-1.577 1.633H7.025v1h5.086v-1zM9.5 20.379a.5.5 0 101 0h-1zM10 16v-.5a.5.5 0 00-.5.5h.5zm0 1.863a.5.5 0 000 1v-1zm6.436-1.234a.5.5 0 00.298-.954l-.299.954zm-1.887 2.824a.5.5 0 00-.5.866l.5-.866zM18.752 16v-.5a.5.5 0 00-.5.5h.5zm0 4.379h-.5a.5.5 0 00.5.5v-.5zm-8.252 0V16h-1v4.379h1zm-.5-1.516h1.645v-1H10v1zm1.645 0c.584 0 1.054-.198 1.378-.533.316-.328.459-.752.459-1.148h-1c0 .163-.06.33-.178.453-.112.116-.31.228-.659.228v1zm1.837-1.681c0-.397-.143-.82-.46-1.148-.323-.335-.793-.534-1.377-.534v1c.348 0 .546.113.658.228.12.123.179.29.179.454h1zM11.645 15.5H10v1h1.645v-1zm5.09.175c-.68-.213-1.326-.238-1.834-.04-.54.21-.899.669-.899 1.277h1c0-.155.067-.27.261-.345.226-.088.622-.11 1.173.062l.298-.954zm-2.733 1.237c0 .52.265.884.582 1.134.295.231.672.393.97.524.33.143.58.255.757.39.153.118.195.21.195.323h1c0-.517-.271-.875-.587-1.117-.293-.225-.67-.384-.965-.513-.328-.143-.577-.256-.752-.393-.152-.12-.2-.22-.2-.348h-1zm2.504 2.37c0 .166-.05.264-.11.33a.662.662 0 01-.365.176c-.372.074-.926-.014-1.482-.335l-.5.866c.713.412 1.512.582 2.176.45.337-.066.66-.216.902-.476a1.45 1.45 0 00.379-1.01h-1zM18.252 16v4.379h1V16h-1zm.5 4.879h1.106v-1h-1.106v1zm1.106 0c1.524 0 2.642-1.181 2.642-2.69h-1c0 .982-.696 1.69-1.642 1.69v1zm2.642-2.69c0-1.508-1.117-2.689-2.642-2.689v1c.947 0 1.642.707 1.642 1.69h1zM19.858 15.5h-1.106v1h1.106v-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaPsd =
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
export default MediaPsd;
