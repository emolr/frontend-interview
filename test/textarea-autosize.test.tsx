import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import TextareaAutosize from '../src/components/textarea-autosize'

it('Should pass props to textarea', () => {
  const textarea = render(<TextareaAutosize data-testid="testId"/>)
  expect(textarea.getByTestId('testId')).toBeInTheDocument()
})

it('Should render an textarea element', () => {
  const textarea = render(<TextareaAutosize />)
  expect(textarea.container.querySelector('textarea')?.tagName).toBe('TEXTAREA')
})
