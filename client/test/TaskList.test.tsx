import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react';
import TaskList from '../src/components/organisms/TaskList';
import reducers from '../src/reducers';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Top from '../src/containers/Top';

const server = setupServer(
  rest.delete('http://localhost:5000/tasks/1', (req, res, ctx) => {
    return res(ctx.status(202));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  cleanup;
  server.resetHandlers();
});
afterAll(() => server.close());

function renderWithRedux(component: JSX.Element, initialState: any) {
  let store;
  if (initialState) {
    store = createStore(reducers, initialState, applyMiddleware(reduxThunk));
  } else {
    store = createStore(reducers, applyMiddleware(reduxThunk));
  }
  return { ...render(<Provider store={store}>{component}</Provider>) };
}

describe('TaskList', () => {
  it('render TaskList Component', () => {
    const task = { '1': { id: '1', title: 'title1' } };
    const props = Object.values(task)[0];
    renderWithRedux(<TaskList {...props} />, { task });
    expect(screen.getByText('title1')).toBeInTheDocument();
  });
  it('delete task event', async () => {
    const task = { '1': { id: '1', title: 'title1' } };
    renderWithRedux(<Top />, { task });
    fireEvent.click(screen.getByRole('button', { name: 'delete' }));
    await waitFor(() =>
      expect(screen.queryByText('title1')).not.toBeInTheDocument()
    );
  });
});
