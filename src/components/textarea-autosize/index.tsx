import classNames from 'classnames';
import React, {
  FormEvent,
  TextareaHTMLAttributes,
  useLayoutEffect,
  useRef,
} from 'react';
import useForkRef from '../../utils/hooks/useForkRef';
import useResizeCallback from '../../utils/hooks/useResizeCallback';
import resizeTextarea from './resize-textarea';

import styles from './textarea-autosize.module.scss';

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxRows?: number;
}

const TextareaAutosize = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ maxRows, onInput, className, ...rest }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const handleRefs = useForkRef(textareaRef, ref);

    const rootClass = classNames(
      {
        [styles.root]: true,
      },
      className,
    );

    useLayoutEffect(() => {
      // Resize if textarea has value on init
      if (textareaRef.current) {
        resizeTextarea(textareaRef.current, {
          maxRows,
        });
      }
    }, [textareaRef, rest.value, maxRows]);

    // Resize if the DOM node changes size
    useResizeCallback<HTMLTextAreaElement>(textareaRef, (textarea) => {
        if (!textarea) {
          return;
        }

        resizeTextarea(textarea, {
          maxRows,
        })
      }
    );

    const handleOnInput = (event: FormEvent<HTMLTextAreaElement>): void => {
      // Cast event if set on instance
      if (onInput) {
        onInput(event);
      }

      resizeTextarea(event.target as HTMLTextAreaElement, {
        maxRows,
      });
    };

    return (
      <textarea
        {...rest}
        className={rootClass}
        ref={handleRefs}
        onInput={handleOnInput}
      />
    );
  },
);

export default TextareaAutosize;
