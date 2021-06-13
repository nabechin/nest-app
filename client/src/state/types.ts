import { Task } from '../entity/task';

export type TaskState = {
  [K in keyof Task as Extract<K, 'id'>]: Task;
};
