import React, { FC, forwardRef, HTMLAttributes, Ref } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {

}

const ChatStream: FC<Props> = forwardRef<HTMLDivElement, Props>(({children}, ref) => {
  return (
    <div ref={ref}></div>
  )
})

export default ChatStream;
