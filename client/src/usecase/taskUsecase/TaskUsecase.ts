import { Task } from '../../entity/task';
import { ITaskUseCase } from './ITaskUsecase';

export class TaskUseCase implements ITaskUseCase {
  createTask = (): Task => {
    return { id: '1', title: 'title' };
  };
}
