import { CreateTaskFormValue } from '../entity/task';

export const CREATE_TASK = 'CREATE_TASK';
export type CreateTaskAction = { type: typeof CREATE_TASK } & {
  payload: CreateTaskFormValue;
};
