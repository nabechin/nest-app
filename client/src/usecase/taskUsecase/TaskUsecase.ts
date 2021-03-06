import { CreateTaskFormValue, FilterTask, Task } from '../../entity/task';
import { ITaskRepository } from '../../repository/taskRepository/ITaskRepository';
import { ITaskUseCase } from './ITaskUsecase';

export class TaskUseCase implements ITaskUseCase {
  constructor(private readonly taskRepository: ITaskRepository) {}
  createTask = (createTaskFormValue: CreateTaskFormValue): Promise<Task> => {
    return this.taskRepository.createTask(createTaskFormValue);
  };
  getTasks = (): Promise<Task[]> => {
    return this.taskRepository.getTasks();
  };

  deleteTask = (id: string): Promise<void> => {
    return this.taskRepository.deleteTask(id);
  };

  filterTask = (filterTask: FilterTask): Promise<Task[]> => {
    return this.taskRepository.filterTasks(filterTask);
  };
}
