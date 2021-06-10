import { CREATE_TASK } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state, [action.payload.title]: action.payload.title };
    default:
      return state;
  }
};
