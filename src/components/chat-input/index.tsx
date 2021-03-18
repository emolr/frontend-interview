import classNames from 'classnames';
import React, { FC } from 'react';
import TextareaAutosize, {
  Props as TextareaAutosizeProps,
} from '../textarea-autosize';

import styles from './chat-input.module.scss';

export type Props = TextareaAutosizeProps;

const ChatInput= React.forwardRef<HTMLTextAreaElement, Props>(({ className, ...rest }, ref) => {
  const rootClass = classNames(
    {
      [styles.root]: true,
    },
    className,
  );

  return <TextareaAutosize {...rest} className={rootClass} ref={ref} />;
});

export default ChatInput;
