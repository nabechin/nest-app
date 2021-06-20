import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

const mockTasksService = () => ({
  getAllTasks: jest.fn(),
  createTask: jest.fn(),
  deleteTask: jest.fn(),
});

describe('tasksController', () => {
  let tasksService;
  let tasksController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksController,
        {
          provide: TasksService,
          useFactory: mockTasksService,
        },
      ],
    }).compile();
    tasksService = module.get<TasksService>(TasksService);
    tasksController = module.get<TasksController>(TasksController);
  });
  it('getTasks', async () => {
    const mockTasks = [{ id: '12345', title: 'title' }];
    const filterTasksDto = { title: 'title' };
    tasksService.getAllTasks.mockResolvedValue(mockTasks);
    const result = await tasksController.getAllTasks(filterTasksDto);
    expect(result).toEqual({ records: mockTasks });
    expect(tasksService.getAllTasks).toHaveBeenCalledWith(filterTasksDto);
  });
  it('createTask', async () => {
    const createTaskDto = { title: 'title' };
    const createdTask = {
      id: '12345',
      ...createTaskDto,
    };
    tasksService.createTask.mockResolvedValue(createdTask);
    const result = await tasksController.createTask(createTaskDto);
    expect(result).toEqual({ record: createdTask });
    expect(tasksService.createTask).toHaveBeenCalledWith(createTaskDto);
  });
  it('deleteTask', async () => {
    const id = '12345';
    await tasksController.deleteTask(id);
    expect(tasksService.deleteTask).toHaveBeenCalledWith(id);
  });
});
