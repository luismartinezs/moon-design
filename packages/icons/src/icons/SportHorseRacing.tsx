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
      d="M16.673 13.57a.5.5 0 10-.852-.523l.852.523zm-.97 3.946l.478-.145-.003-.01-.476.155zm2.965 3.155l-.19.462.19-.462zm2.087 1.569l.427-.26a.47.47 0 00-.018-.027l-.41.287zm.376.619l.427-.26-.427.26zm.625 1.675l-.47.17a.5.5 0 00.148.213l.322-.383zm1.051.882l-.321.383a.5.5 0 00.52.076l-.199-.46zm2.716-1.174l.199.46a.5.5 0 00.301-.474l-.5.014zM23.775 9.425a.5.5 0 00-.97.246l.97-.246zm-2.947 5.123l-.32.383.32-.383zm.895-1.066l-.321.383.321-.383zm.25 7.834a.5.5 0 10-.18-.984l.18.984zm-3.872-1.46a.5.5 0 00-.496.868l.496-.868zm-1.82 6.526a.5.5 0 10.884-.466l-.885.466zm.825-6.416a.5.5 0 10-.766-.643l.766.643zm5.78-10.785a.5.5 0 10.788.617l-.787-.617zm2.185-1.976l.393.308a.5.5 0 00-.072-.692l-.321.384zM9.27 11.09l.383.321-.383-.321zm-3.635 6.796a.5.5 0 10.988.157l-.988-.157zM24.898 7.06l.322-.383-.322.383zm-.95-.52l.138-.48-.139.48zm-6.337.287a.5.5 0 00-.988.158l.988-.158zm1.212 13.903a.5.5 0 00.987-.158l-.987.158zM8.028 13.774a.5.5 0 00-.99.142l.99-.142zm7.415 8.993a.5.5 0 10.229-.973l-.23.973zm.378-9.72c-.884 1.442-1.075 3.147-.594 4.624l.95-.31c-.386-1.19-.239-2.592.496-3.791l-.852-.523zm-.597 4.614c.493 1.624 1.713 2.837 3.253 3.472l.382-.924c-1.299-.536-2.283-1.536-2.678-2.838l-.957.29zm3.255 3.473c.785.32 1.42.757 1.866 1.393l.819-.574c-.587-.837-1.402-1.375-2.307-1.745l-.378.926zm1.849 1.366l.376.619.854-.52-.376-.619-.854.52zm.376.619c.161.265.24.469.308.694.066.218.143.53.274.891l.94-.34c-.121-.335-.169-.552-.258-.843a3.803 3.803 0 00-.41-.922l-.854.52zm.73 1.798l1.052.882.642-.766-1.05-.882-.644.766zm1.571.958l2.717-1.174-.397-.918-2.716 1.174.396.918zm3.018-1.647c-.154-5.203-.952-9.699-2.248-14.803l-.97.246c1.285 5.058 2.068 9.478 2.218 14.586l1-.03zm-5.516-9.297c.506.425 1.26.36 1.686-.147l-.766-.643a.196.196 0 01-.277.024l-.643.766zm1.686-.147a1.196 1.196 0 00-.148-1.685l-.643.766c.084.07.094.194.025.277l.766.642zm-.148-1.685a1.196 1.196 0 00-1.686.147l.766.643a.196.196 0 01.277-.024l.643-.766zm-1.686.147a1.196 1.196 0 00.148 1.685l.643-.766a.196.196 0 01-.025-.276l-.766-.643zm1.434 7.086c-1.397.256-2.689.097-3.692-.476l-.496.868c1.257.718 2.802.879 4.368.592l-.18-.984zm-4.628 5.584c-.688-1.308-.998-2.444-.992-3.42.006-.964.32-1.8.933-2.53l-.766-.643a4.85 4.85 0 00-1.167 3.167c-.007 1.19.37 2.49 1.107 3.892l.885-.466zm6.509-16.118l1.79-2.285-.787-.617-1.79 2.285.787.617zm1.718-2.977l-.172-.144-.643.766.172.145.643-.767zm-1.306-.76c-5.333-1.542-11.349.12-15.198 4.708l.766.642c3.591-4.279 9.196-5.823 14.154-4.39l.278-.96zM8.888 10.768a14.65 14.65 0 00-3.252 7.117l.988.157a13.65 13.65 0 013.03-6.632l-.766-.642zM25.22 6.677a3.118 3.118 0 00-1.134-.617l-.277.96c.274.08.534.226.768.423l.643-.766zm-8.597.308l2.2 13.745.987-.158-2.2-13.745-.987.158zm-9.585 6.93c.292 2.05 1.39 4.023 2.9 5.596 1.509 1.572 3.46 2.776 5.505 3.256l.229-.973c-1.83-.43-3.617-1.521-5.013-2.976-1.397-1.456-2.374-3.244-2.631-5.044l-.99.142z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportHorseRacing =
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
export default SportHorseRacing;
