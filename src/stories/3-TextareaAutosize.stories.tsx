import React from 'react';
import { number, withKnobs } from '@storybook/addon-knobs';
import TextareaAutosize from '../components/textarea-autosize';

export const regular: React.FC = () => (
  <div>
    <TextareaAutosize placeholder="Enter text and see it expand..." />
  </div>
);

export const maxRows: React.FC = () => (
  <div>
    <TextareaAutosize
      placeholder="Change max rows in knobs..."
      maxRows={number('Max rows', 4)}
      rows={number('Rows', 2)}
    />
  </div>
);

export const customStyle: React.FC = () => (
  <div>
    <TextareaAutosize
      placeholder="Custom style..."
      maxRows={4}
      style={{
        fontSize: '22px',
        lineHeight: 1.5,
        borderWidth: '4px',
      }}
    />
  </div>
);

export const autosizeOnResize: React.FC = () => {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto' }}>
      <TextareaAutosize
        defaultValue="Hi devs at dixa, I hope you enjoy this autosizing textarea! Psst. It recalculate if the size of it changes."
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default {
  title: 'Textarea Autosize',
  decorators: [withKnobs],
};
