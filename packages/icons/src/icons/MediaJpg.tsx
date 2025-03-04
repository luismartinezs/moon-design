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
      d="M7.875 10.228l.347.36.003-.003-.35-.357zM12.42 5.77l-.347-.36-.003.003.35.357zM21.538 26.5H10.462v1h11.076v-1zm-11.076 0c-1.623 0-2.962-1.355-2.962-3.055h-1c0 2.227 1.762 4.055 3.962 4.055v-1zM7.5 23.445V12.302h-1v11.143h1zm0-11.143c0-.652.263-1.272.722-1.714l-.694-.72A3.38 3.38 0 006.5 12.302h1zm.725-1.717l4.545-4.459-.7-.714-4.545 4.46.7.713zm4.542-4.456a2.23 2.23 0 011.548-.629v-1a3.23 3.23 0 00-2.242.91l.694.72zm1.548-.629h7.223v-1h-7.223v1zm7.223 0c1.623 0 2.962 1.355 2.962 3.055h1c0-2.227-1.762-4.055-3.962-4.055v1zM24.5 8.555v14.89h1V8.555h-1zm0 14.89c0 1.7-1.338 3.055-2.962 3.055v1c2.201 0 3.962-1.828 3.962-4.055h-1zM13.688 5.01v4.781h1v-4.78h-1zm0 4.781c0 .914-.718 1.633-1.577 1.633v1c1.437 0 2.577-1.192 2.577-2.633h-1zm-1.577 1.633H7.025v1h5.086v-1zM10.375 18.995a.5.5 0 00-.75.66l.75-.66zm2.008-2.93h.5a.5.5 0 00-.5-.5v.5zm-.697-.5a.5.5 0 000 1v-1zm2.357 4.37a.5.5 0 001 0h-1zm1-3.935a.5.5 0 10-1 0h1zm-.5 1.623a.5.5 0 100 1v-1zm0-2.122a.5.5 0 000 1v-1zm7.152 1.269a.5.5 0 10.61-.793l-.61.793zM22 19.56l.305.396a.5.5 0 00.195-.396H22zm0-1.385h.5a.5.5 0 00-.5-.5v.5zm-.597-.5a.5.5 0 000 1v-1zm-11.778 1.98c.367.417.92.844 1.675.844v-1c-.346 0-.648-.19-.925-.505l-.75.66zm1.675.844c.304 0 .697-.095 1.023-.371.343-.291.56-.74.56-1.341h-1c0 .342-.113.499-.207.578a.602.602 0 01-.376.134v1zm1.583-1.712v-2.723h-1v2.723h1zm-.5-3.223h-.697v1h.697v-1zm2.66 4.37V16h-1v3.935h1zm-.5-1.312h1.573v-1h-1.573v1zm1.573 0c.554 0 1.006-.176 1.322-.484.311-.302.456-.7.456-1.077h-1a.504.504 0 01-.154.36c-.1.098-.287.201-.624.201v1zm1.778-1.561c0-.377-.145-.774-.456-1.077-.316-.308-.768-.484-1.322-.484v1c.337 0 .524.103.624.2a.504.504 0 01.154.361h1zm-1.778-1.561h-1.573v1h1.573v-1zm6.189.476c-.386-.297-.803-.477-1.467-.477v1c.432 0 .637.1.857.27l.61-.793zm-1.467-.477c-1.44 0-2.548 1.057-2.548 2.467h1c0-.826.627-1.467 1.548-1.467v-1zm-2.548 2.467c0 1.41 1.107 2.468 2.548 2.468v-1c-.922 0-1.548-.641-1.548-1.468h-1zm2.548 2.468c.663 0 1.08-.18 1.467-.477l-.61-.793c-.22.17-.425.27-.857.27v1zm1.662-.874v-1.385h-1v1.385h1zm-.5-1.885h-.597v1H22v-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaJpg =
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
export default MediaJpg;
