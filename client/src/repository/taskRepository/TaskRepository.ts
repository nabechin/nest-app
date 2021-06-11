import { ITaskRepository } from './ITaskRepository';
import { Task } from '../../entity/task';

export class TaskRepository implements ITaskRepository {
  craeteTask = (task: Task): Task => {
    return { id: '111', title: 'testtitle' };
  };
}
