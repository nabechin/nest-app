import { Task } from '../../entity/task';

export interface ITaskUseCase {
  createTask: (task: Task) => Promise<Task>;
  getTasks: () => Promise<Task[]>;
}
