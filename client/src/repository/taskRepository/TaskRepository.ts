import { ITaskRepository } from './ITaskRepository';

export class TaskRepository implements ITaskRepository {
  craeteTask = (task: Task): Task => {
    return { id: '111', title: 'testtitle' };
  };
}
