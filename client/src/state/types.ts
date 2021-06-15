import { Task } from '../entity/task';

export type TaskState = {
  [K in Task['id']]: Task;
};
