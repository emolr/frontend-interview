import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import ChatInput from '../components/chat-input';

export const regular: React.FC = () => (
  <div>
    <ChatInput
      placeholder={text('Placeholder', 'How can we help you today?')}
      maxRows={number('Max rows', 4)}
      rows={number('Rows', 2)}
    />
  </div>
);

export default {
  title: 'Chat input',
  decorators: [withKnobs],
};
