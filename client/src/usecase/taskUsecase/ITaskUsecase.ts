import { Task } from '../../entity/task';

export interface ITaskUseCase {
  createTask: (task: Task) => Task;
  getTasks: () => Promise<Task[]>;
}
