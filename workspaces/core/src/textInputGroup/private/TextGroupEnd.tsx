import React from 'react';
import { TextInput, TextInputProps } from '../..';
import { OrientationType } from './types/OrientationType';

export interface TextGroupStartProps {
  inputProps?: TextInputProps;
  orientation?: OrientationType;
  isRtl?: boolean;
}

const TextGroupStart: React.FC<TextGroupStartProps> = ({
  inputProps,
  orientation,
  isRtl,
}) => {
  return (
    <TextInput
      {...(inputProps ?? { inputSize: 'md', type: 'text' })}
      dir={isRtl ? 'rtl' : 'ltr'}
      isSharpRightSide={orientation === 'horizontal' && isRtl}
      isSharpLeftSide={orientation === 'horizontal' && !isRtl}
      isSharpTopSide={orientation === 'vertical'}
      isTopBottomBorderHidden={orientation === 'vertical'}
      isSideBorderHidden={orientation === 'horizontal'}
    ></TextInput>
  );
};

export default TextGroupStart;
