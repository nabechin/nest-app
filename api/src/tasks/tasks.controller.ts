import { Controller, Get } from '@nestjs/common';
import { ResponseTasks } from './interfaces/tasks.interface';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  getTasks(): ResponseTasks {
    return {
      records: this.tasksService.getAllTasks(),
    };
  }
}
