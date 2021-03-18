import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ChatMessage from '../components/chat-message';

export const regular: React.FC = () => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <ChatMessage>This is a chat message</ChatMessage>
      <br />
      <ChatMessage isPersonal>This is a personal chat message</ChatMessage>
    </div>
  )
};

export default {
  title: 'Chat message',
  decorators: [withKnobs],
};
