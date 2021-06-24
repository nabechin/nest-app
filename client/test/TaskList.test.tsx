import React from 'react';
import { screen, render } from '@testing-library/react';
import TaskList from '../src/components/organisms/TaskList';

describe('TaskList', () => {
  it('render TaskList Component', () => {
    const aaa = {
      id: '1',
      title: 'title',
      deleteTask: (id: string) => {
        return;
      },
    };
    render(<TaskList {...aaa} />);
  });
});
