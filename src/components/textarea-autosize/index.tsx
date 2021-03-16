import classNames from 'classnames';
import React, { FC, FormEvent, TextareaHTMLAttributes, useEffect, useRef } from 'react';
import { useForkRef } from '../../utils/hooks/useForkRef';
import { useResizeCallback } from '../../utils/hooks/useResizeCallback';
import { resizeTextarea } from './utils';

import styles from './textarea-autosize.module.scss';

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextareaAutosize: FC<Props> = React.forwardRef(({ value, onInput, className, style, ...rest }, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleRefs = useForkRef(textareaRef, ref);

  const rootClass = classNames(
    {
      [styles.root]: true
    },
    className
  );

  useEffect(() => {
    // Resize if textarea has value on init
    if (value && textareaRef.current) {
      resizeTextarea(textareaRef.current);
    }
  }, [textareaRef, value]);

  // Resize if the DOM node changes size
  useResizeCallback(textareaRef, (textarea) => resizeTextarea(textarea));

  const handleOnInput = (event: FormEvent<HTMLTextAreaElement>) => {
    // Cast event if set on instance
    if (onInput) {
      onInput(event);
    }

    resizeTextarea(event.target as HTMLTextAreaElement);
  }

  return (
    <textarea
      {...rest}
      className={rootClass}
      ref={handleRefs}
      onInput={handleOnInput}
    />
  )
})

export default TextareaAutosize;
