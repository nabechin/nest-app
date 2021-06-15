import {
  CREATE_TASK,
  GET_TASKS,
  DELETE_TASK,
  TaskAction,
} from '../actions/types';
import _ from 'lodash';
import { TaskState } from '../state/types';

export default (
  state: TaskState = {} as TaskState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state, [action.payload.id]: action.payload };
    case GET_TASKS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case DELETE_TASK:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
