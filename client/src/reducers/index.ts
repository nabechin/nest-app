import { combineReducers } from 'redux';
import { TaskState } from '../state/types';
import taskReducer from './taskReducer';

type AppState = {
  task: TaskState;
};

export default combineReducers<AppState>({
  task: taskReducer,
});
