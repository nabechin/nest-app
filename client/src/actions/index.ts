import { CREATE_TASK, CreateTaskAction } from './types';
import { CreateTaskFormValue } from '../entity/task';

export const createTask = (
  createTaskFormValue: CreateTaskFormValue
): CreateTaskAction => ({
  type: CREATE_TASK,
  payload: createTaskFormValue,
});
