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
    const tasks = [{ id: '1', title: 'title' }];
    mockTaskRepository.getTasks.mockReturnValue(tasks);
    const taskUseCase = new TaskUseCase(mockTaskRepository);
    const results = await taskUseCase.getTasks();
    expect(results).toEqual(tasks);
  });
});
