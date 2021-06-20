import { Test, TestingModule } from '@nestjs/testing';
import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';

const mockTasksRepository = () => ({
  getAllTasks: jest.fn(),
  createTask: jest.fn(),
  deleteTask: jest.fn(),
});

describe('TasksService', () => {
  let tasksService;
  let tasksRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TasksRepository, useFactory: mockTasksRepository },
      ],
    }).compile();
    tasksService = module.get<TasksService>(TasksService);
    tasksRepository = module.get<TasksRepository>(TasksRepository);
  });

  it('getAllTasks', async () => {
    const mockTasks = [{ id: '12345', title: 'title' }];
    tasksRepository.getAllTasks.mockResolvedValue(mockTasks);

    const filterTasksDto = { title: 'titletest' };
    const result = await tasksService.getAllTasks(filterTasksDto);
    expect(result).toEqual(mockTasks);
    expect(tasksRepository.getAllTasks).toHaveBeenCalledWith(filterTasksDto);
  });

  it('createTask', async () => {
    const createTaskDto = { id: '12345', title: 'title' };
    await tasksService.createTask(createTaskDto);
    expect(tasksRepository.createTask).toHaveBeenCalledWith(createTaskDto);
  });

  it('deleteTask', async () => {
    const id = '12345';
    await tasksService.deleteTask(id);
    expect(tasksRepository.deleteTask).toHaveBeenCalledWith(id);
  });
});
