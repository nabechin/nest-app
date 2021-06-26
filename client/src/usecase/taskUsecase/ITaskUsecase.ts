import { CreateTaskFormValue, FilterTask, Task } from '../../entity/task';

export interface ITaskUseCase {
  createTask: (task: CreateTaskFormValue) => Promise<Task>;
  getTasks: () => Promise<Task[]>;
  deleteTask: (id: string) => Promise<void>;
  filterTask: (filterTask: FilterTask) => Promise<Task[]>;
}
