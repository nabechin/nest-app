import { ITaskRepository } from './ITaskRepository';
import { CreateTaskFormValue, Task } from '../../entity/task';
import { baseAxios } from '../../api';

export class TaskRepository implements ITaskRepository {
  createTask = async (
    createTaskFormValue: CreateTaskFormValue
  ): Promise<Task> => {
    const { data } = await baseAxios.post('/tasks', {
      title: createTaskFormValue.title,
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(data);
    return data.record;
  };
  getTasks = async (): Promise<Task[]> => {
    const { data } = await baseAxios.get('/tasks');
    return data.records;
  };

  deleteTask = async (id: string): Promise<void> => {
    await baseAxios.delete(`/tasks/${id}`);
  };
}
