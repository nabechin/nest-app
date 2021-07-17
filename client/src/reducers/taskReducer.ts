import mapKeys from 'lodash/mapKeys';
import omit from 'lodash/omit';
import { TaskState } from '../state/types';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { TaskActions } from '../actions';
import {
  TaskAction,
  CREATE_TASK,
  GET_TASKS,
  DELETE_TASK,
  FILTER_TASK,
} from '../actions/types';
const initialState: TaskState = {};

// わけわからん
export const TaskReducer = reducerWithInitialState(initialState)
  .case(TaskActions.createTask, (state, action) => {
    return { ...state, [action.payload.id]: action.payload };
  })
  .case(TaskActions.getTasks, (state, action) => {
    console.log(action);
    return { ...state, ...mapKeys(action.payload, 'id') };
  })
  .case(TaskActions.deleteTask, (state, action) => {
    return omit(state, action.payload);
  })
  .case(TaskActions.filterTask, (state, action) => {
    return mapKeys(action.payload, 'id');
  })
  .default((state) => {
    return state;
  });

export default (
  state: TaskState = {} as TaskState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state, [action.payload.id]: action.payload };
    case GET_TASKS:
      return { ...state, ...mapKeys(action.payload, 'id') };
    case DELETE_TASK:
      return omit(state, action.payload);
    case FILTER_TASK:
      return mapKeys(action.payload, 'id');
    default:
      return state;
  }
};
