import { ITaskRepository } from '../src/repository/taskRepository/ITaskRepository';
import { TaskUseCase } from '../src/usecase/taskUsecase/TaskUsecase';

class MockTaskRepository implements ITaskRepository {
  createTask = jest.fn();
  getTasks = jest.fn();
  deleteTask = jest.fn();
  filterTasks = jest.fn();
}
describe('TaskUsecase', () => {
  test('createTask', async () => {
    const mockTaskRepository = new MockTaskRepository();
    const createTaskFormValue = { title: 'title' };
    mockTaskRepository.createTask.mockReturnValue({
      id: '123',
      ...createTaskFormValue,
    });
    const taskUseCase = new TaskUseCase(mockTaskRepository);
    const result = await taskUseCase.createTask(createTaskFormValue);
    expect(mockTaskRepository.createTask).toHaveBeenCalledWith(
      createTaskFormValue
    );
    expect(result).toEqual({
      id: '123',
      ...createTaskFormValue,
    });
  });

  test('getTasks', async () => {
    const mockTaskRepository = new MockTaskRepository();
    const tasks = [{ id: '1', title: 'title' }];
    mockTaskRepository.getTasks.mockReturnValue(tasks);
    const taskUseCase = new TaskUseCase(mockTaskRepository);
    const results = await taskUseCase.getTasks();
    expect(results).toEqual(tasks);
  });

  test('deleteTask', async () => {
    const mockTaskRepository = new MockTaskRepository();
    const id = '123';
    mockTaskRepository.deleteTask.mockReturnValue(undefined);
    const taskUseCase = new TaskUseCase(mockTaskRepository);
    taskUseCase.deleteTask(id);
    expect(mockTaskRepository.deleteTask).toHaveBeenCalledWith(id);
  });

  test('filterTask', async () => {
    const mockTaskRepository = new MockTaskRepository();
    const filterTask = { title: 'title' };
    mockTaskRepository.filterTasks.mockReturnValue([
      {
        id: '123',
        ...filterTask,
      },
    ]);
    const taskUseCase = new TaskUseCase(mockTaskRepository);
    const results = await taskUseCase.filterTask(filterTask);
    expect(mockTaskRepository.filterTasks).toHaveBeenCalledWith(filterTask);
    expect(results).toEqual([
      {
        id: '123',
        ...filterTask,
      },
    ]);
  });
});
