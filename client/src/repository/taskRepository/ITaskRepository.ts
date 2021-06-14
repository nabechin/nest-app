import { CreateTaskFormValue, Task } from '../../entity/task';

export interface ITaskRepository {
  createTask: (createTaskFormValue: CreateTaskFormValue) => Promise<Task>;
  getTasks: () => Promise<Task[]>;
}
