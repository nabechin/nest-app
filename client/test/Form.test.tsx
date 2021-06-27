import React from 'react';
import { Form } from '../src/components/organisms/Form';
import { screen, render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('FormComponent', () => {
  test('appear text from props', () => {
    const props = { buttonText: 'add' };
    render(<Form {...props}></Form>);
    expect(screen.getByRole('button', { name: 'add' })).toBeInTheDocument();
  });

  test('cannot submit value', () => {
    const mockOnSubmit = jest.fn().mockReturnValue(undefined);
    const props = {
      onHandleSubmit: mockOnSubmit,
      buttonText: 'add',
    };
    render(<Form {...props}></Form>);
    fireEvent.click(screen.getByRole('button', { name: 'add' }));
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
  test('submit value', () => {
    const mockOnSubmit = jest.fn().mockReturnValue(undefined);
    const props = {
      onHandleSubmit: mockOnSubmit,
      buttonText: 'add',
    };
    render(<Form {...props}></Form>);
    const input = screen.getByLabelText('addinput') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'firstTask' } });
    fireEvent.click(screen.getByRole('button', { name: 'add' }));
    expect(mockOnSubmit).toHaveBeenCalledWith({ title: 'firstTask' });
  });
});
