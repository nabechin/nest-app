import { Task } from '../../entity/task';
import { ITaskRepository } from '../../repository/taskRepository/ITaskRepository';
import { ITaskUseCase } from './ITaskUsecase';

export class TaskUseCase implements ITaskUseCase {
  constructor(private readonly taskRepository: ITaskRepository) {}
  createTask = (): Task => {
    return { id: '1', title: 'title' };
  };
  getTasks = (): Promise<Task[]> => {
    return this.taskRepository.getTasks();
  };
}
