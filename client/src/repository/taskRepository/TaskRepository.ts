import { ITaskRepository } from './ITaskRepository';
import { Task } from '../../entity/task';
import { baseAxios } from '../../api';

export class TaskRepository implements ITaskRepository {
  craeteTask = (task: Task): Task => {
    return { id: '111', title: 'testtitle' };
  };
  getTasks = async (): Promise<Task[]> => {
    const { data } = await baseAxios.get('/tasks');
    return data.records;
  };
}
