import classNames from 'classnames';
import React, { FC, forwardRef, HTMLAttributes, Ref } from 'react';
import styles from './chat-message.module.scss';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  isPersonal?: boolean;
}

const ChatMessage: FC<Props> = forwardRef(
  ({ isPersonal, className, children, ...rest }, ref: Ref<HTMLDivElement>) => {
    const rootClass = classNames(
      {
        [styles.root]: true,
        [styles.rootPersonal]: isPersonal,
      },
      className,
    );

    return (
      <div {...rest} className={rootClass} ref={ref}>
        <div className={styles.message}>
          <svg
            className={styles.arrow}
            viewBox="0 0 24 24"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0h24L5.121 18.879A3 3 0 010 16.757V0z"
              fill="#D8D8D8"
              fillRule="evenodd"
            />
          </svg>
          <div>{children}</div>
        </div>
      </div>
    );
  },
);

export default ChatMessage;
