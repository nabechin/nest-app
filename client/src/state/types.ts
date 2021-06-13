import { Task } from '../entity/task';

export type TaskState = {
  [key: string]: Task;
};
