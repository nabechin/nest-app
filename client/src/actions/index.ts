import { CREATE_TASK, TaskAction, GET_TASKS } from './types';
import { CreateTaskFormValue } from '../entity/task';

export const createTask = (
  createTaskFormValue: CreateTaskFormValue
): TaskAction => ({
  type: CREATE_TASK,
  payload: createTaskFormValue,
});

export const getTasks = () => async (dispatch) => {};
