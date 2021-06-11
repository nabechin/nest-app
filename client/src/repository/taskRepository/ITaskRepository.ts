import { Task } from '../../entity/task';

export interface ITaskRepository {
  craeteTask: (task: Task) => Task;
}
