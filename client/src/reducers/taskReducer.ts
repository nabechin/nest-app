import { CREATE_TASK, GET_TASKS, TaskAction } from '../actions/types';
import _ from 'lodash';

export default (state = {}, action: TaskAction) => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state, [action.payload.title]: action.payload.title };
    case GET_TASKS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
};
