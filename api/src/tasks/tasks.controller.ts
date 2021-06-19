import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { ResponseTasks } from './interfaces/tasks.interface';
import { Task } from './schemas/task.schema';
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
  async createTask(
    @Body() createTaskDto: CreateTaskDto,
  ): Promise<{ record: Task }> {
    const task = await this.tasksService.createTask(createTaskDto);
    console.log(task);
    return {
      record: task,
    };
  }
  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    this.tasksService.deleteTask(id);
  }
}
