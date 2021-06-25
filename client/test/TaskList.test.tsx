import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import TaskList from '../src/components/organisms/TaskList';
import taskReducer from '../src/reducers/taskReducer';
import { TaskState } from '../src/state/types';
import { TaskAction } from '../src/actions/types';

function renderWithRedux(
  component: JSX.Element,
  {
    initialState,
    store = createStore<TaskState, TaskAction, unknown, unknown>(
      taskReducer,
      {}
    ),
  } = {}
) {
  return { ...render(<Provider store={store}>{component}</Provider>) };
}

describe('TaskList', () => {
  it('render TaskList Component', () => {
    const aaa = {
      id: '1',
      title: 'title',
    };
    renderWithRedux(<TaskList {...aaa} />);
    screen.debug();
  });
});
