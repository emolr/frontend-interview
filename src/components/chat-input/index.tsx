import classNames from 'classnames';
import TextareaAutosize, { Props as TextareaAutosizeProps } from '../textarea-autosize'
import React, { FC } from 'react'

import styles from './chat-input.module.scss';

export interface Props extends TextareaAutosizeProps {}

export const ChatInput: FC<Props> = React.forwardRef(({className, ...rest}, ref) => {
  const rootClass = classNames(
    {
      [styles.root]: true
    },
    className
  );

  return (
    <TextareaAutosize
      {...rest}
      className={rootClass}
      ref={ref} />
  )
})

export default ChatInput
