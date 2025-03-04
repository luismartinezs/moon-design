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
      d="M21 10v.5-.5zm-5.1 0l-.429.257.146.243h.283V10zM14 6.833l.429-.257-.146-.243H14v.5zm-3.967 0v-.5.5zM24 13h-.5.5zM7.033 9.833h-.5.5zm1.038 7.764l-.49-.101.49.1zM6.994 22.83l.49.1-.49-.1zm14.976 2.403v.5-.5zm-13.017 0v.5-.5zm16.052-6.83l-.49-.1.49.1zm-1.076 5.233l.49.101-.49-.1zM23.046 16v-.5.5zM10.03 16v.5-.5zM21 9.5h-5.1v1H21v-1zm-4.671.243l-1.9-3.167-.858.514 1.9 3.167.858-.514zm-2.33-3.41h-3.966v1H14v-1zM23.5 13v3h1v-3h-1zM21 10.5a2.5 2.5 0 012.5 2.5h1A3.5 3.5 0 0021 9.5v1zM10.034 6.333a3.5 3.5 0 00-3.5 3.5h1a2.5 2.5 0 012.5-2.5v-1zM7.582 17.496l-1.077 5.233.98.202 1.076-5.233-.98-.202zm14.387 7.237H8.954v1H21.97v-1zm2.547-6.43l-1.077 5.233.98.201 1.076-5.233-.98-.202zm-1.47-2.803H10.03v1h13.016v-1zm2.45 3.004a2.5 2.5 0 00-2.45-3.004v1a1.5 1.5 0 011.47 1.802l.98.202zM8.56 17.698a1.5 1.5 0 011.47-1.198v-1a2.5 2.5 0 00-2.45 1.996l.98.202zm-2.056 5.031a2.5 2.5 0 002.448 3.004v-1a1.5 1.5 0 01-1.469-1.802l-.98-.202zm15.464 3.004a2.5 2.5 0 002.45-1.996l-.98-.201a1.5 1.5 0 01-1.47 1.197v1zM6.534 9.833V22.5h1V9.833h-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesFolderOpenAlternative =
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
export default FilesFolderOpenAlternative;
