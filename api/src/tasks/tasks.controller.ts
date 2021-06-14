import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
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
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return {
      record: this.tasksService.createTask(createTaskDto),
    };
  }
}
