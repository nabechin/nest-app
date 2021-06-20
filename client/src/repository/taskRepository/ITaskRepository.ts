import { CreateTaskFormValue, FilterTask, Task } from '../../entity/task';

export interface ITaskRepository {
  createTask: (createTaskFormValue: CreateTaskFormValue) => Promise<Task>;
  getTasks: () => Promise<Task[]>;
  deleteTask: (id: string) => Promise<void>;
  filterTasks: (filterTask: FilterTask) => Promise<Task[]>;
}
