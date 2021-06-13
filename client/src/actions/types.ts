import { CreateTaskFormValue, Task } from '../entity/task';

export const CREATE_TASK = 'CREATE_TASK';
export const GET_TASKS = 'GET_TASKS';

export type TaskAction = CreateTaskAction | GetTasksAction;

export type CreateTaskAction = {
  type: typeof CREATE_TASK;
} & {
  payload: Task;
};

export type GetTasksAction = {
  type: typeof GET_TASKS;
} & {
  payload: Task[];
};
