import { CREATE_TASK, CreateTaskAction } from '../actions/types';
import { Task } from '../entity/task';

export default (state = {}, action: CreateTaskAction) => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state, [action.payload.title]: action.payload.title };
    default:
      return state;
  }
};
