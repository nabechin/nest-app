import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import TaskList from '../src/components/organisms/TaskList';
import taskReducer from '../src/reducers/taskReducer';
import { TaskState } from '../src/state/types';
import { TaskAction } from '../src/actions/types';
import { TaskUseCase } from '../src/usecase/taskUsecase/TaskUsecase';
import { MockTaskRepository } from './TaskUsecase.test';

function renderWithRedux(component: JSX.Element) {
  const store = createStore<TaskState, TaskAction, unknown, unknown>(
    taskReducer,
    {}
  );
  return { ...render(<Provider store={store}>{component}</Provider>) };
}

describe('TaskList', () => {
  it('render TaskList Component', () => {
    const task = {
      id: '1',
      title: 'title',
    };
    renderWithRedux(<TaskList {...task} />);
    expect(screen.getByText('title')).toBeInTheDocument();
  });
  it('delete task event', () => {
    const taskUseCase = new TaskUseCase(new MockTaskRepository());
  });
});
