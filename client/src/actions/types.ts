import { Task } from '../entity/task';

export const CREATE_TASK = 'CREATE_TASK';
export const GET_TASKS = 'GET_TASKS';
export const DELETE_TASK = 'DELETE_TASK';
export const FILTER_TASK = 'FILTER_TASK';

export type TaskAction =
  | CreateTaskAction
  | GetTasksAction
  | DeleteTaskAction
  | FilterTaskAction;

export type CreateTaskAction = {
  type: typeof CREATE_TASK;
  payload: Task;
};

export type GetTasksAction = {
  type: typeof GET_TASKS;
  payload: Task[];
};

export type DeleteTaskAction = {
  type: typeof DELETE_TASK;
  payload: Task['id'];
};

export type FilterTaskAction = {
  type: typeof FILTER_TASK;
  payload: Task[];
};
