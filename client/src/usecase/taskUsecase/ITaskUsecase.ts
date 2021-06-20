import { FilterTask, Task } from '../../entity/task';

export interface ITaskUseCase {
  createTask: (task: Task) => Promise<Task>;
  getTasks: () => Promise<Task[]>;
  deleteTask: (id: string) => Promise<void>;
  filterTask: (filterTask: FilterTask) => Promise<Task[]>;
}
