import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { TextareaAutosize } from '../components/textarea-autosize';

export const regular: React.FC = () => (
  <div>
    <TextareaAutosize />
  </div>
);

export default {
  title: 'Textarea Autosize',
  decorators: [withKnobs],
};
