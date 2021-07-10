import { combineReducers } from 'redux';
import { TaskState } from '../state/types';
import { TaskReducer } from './taskReducer';

type AppState = {
  task: TaskState;
};

export default combineReducers<AppState>({
  task: TaskReducer,
});
