import React, { forwardRef } from 'react';
import classNames from '../../private/utils/classnames';
import Container from './Container';
import HintText from './HintText';
import Input from './Input';
import getBorderRadius from './utils/getBorderRadius';
import type TextInputProps from '../private/types/TextInputProps';

const TextInputInnerLabel = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      id,
      inputSize,
      type,
      disabled,
      placeholder,
      label,
      hintText,
      isError,
      dir,
      isSharpLeftSide,
      isSharpRightSide,
      isSharpTopSide,
      isSharpBottomSide,
      isTopBottomBorderHidden,
      isSideBorderHidden,
      bgColor = 'bg-gohan',
      ...rest
    } = props;
    const inputProps = {
      disabled,
      type,
      placeholder,
      dir,
      isSharpLeftSide,
      isSharpRightSide,
      isSharpTopSide,
      isSharpBottomSide,
      isTopBottomBorderHidden,
      isSideBorderHidden,
      ...rest,
    };
    return (
      <Container disabled={disabled} inputSize={inputSize}>
        <div
          className={classNames(
            'w-full max-w-full relative ',
            !bgColor ? 'bg-transparent' : bgColor,
            getBorderRadius(inputSize)
          )}
        >
          <Input
            inputSize={inputSize}
            isError={isError}
            ref={ref}
            id={id}
            isLabel={!!label}
            isRtl={dir === 'rtl'}
            {...inputProps}
          />
          <label
            className={classNames(
              'absolute text-[0.75rem] leading-3 text-trunks top-3 z-[1] transition-all ease-in-out duration-200',
              dir === 'rtl' ? 'right-4' : 'left-4'
            )}
          >
            {label}
          </label>
        </div>
        {hintText && <HintText isError={isError}>{hintText}</HintText>}
      </Container>
    );
  }
);

export default TextInputInnerLabel;
