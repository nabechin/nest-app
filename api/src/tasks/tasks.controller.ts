import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { ResponseTask, ResponseTasks } from './interfaces/tasks.interface';
import { Task } from './schemas/task.schema';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  async getTasks(): Promise<ResponseTasks> {
    return {
      records: await this.tasksService.getAllTasks(),
    };
  }
  @Post()
  async createTask(
    @Body() createTaskDto: CreateTaskDto,
  ): Promise<ResponseTask> {
    return {
      record: await this.tasksService.createTask(createTaskDto),
    };
  }
  @Delete('/:id')
  async deleteTask(@Param('id') id: string): Promise<void> {
    await this.tasksService.deleteTask(id);
  }
}
