import _ from 'lodash';
import { TaskState } from '../state/types';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { TaskActions } from '../actions';

const initialState: TaskState = {};

export const TaskReducer = reducerWithInitialState(initialState)
  .case(TaskActions.createTask, (state, action) => {
    return { ...state, [action.payload.id]: action.payload };
  })
  .case(TaskActions.getTasks, (state, action) => {
    return { ...state, ..._.mapKeys(action.payload, 'id') };
  })
  .case(TaskActions.deleteTask, (state, action) => {
    return _.omit(state, action.payload);
  })
  .case(TaskActions.filterTask, (state, action) => {
    return _.mapKeys(action.payload, 'id');
  });
