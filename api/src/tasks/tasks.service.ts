import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDto } from '../tasks/dto/createTask.dto';
import { v4 as uuid } from 'uuid';
import { Task, TaskDocument } from './schemas/task.schema';
import { Model } from 'mongoose';
import { FilterTasksDto } from './dto/filterTasks.dto';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) {}
  async getAllTasks(filterTasksDto: FilterTasksDto): Promise<Task[]> {
    return await this.tasksRepository.getAllTasks(filterTasksDto);
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.tasksRepository.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    await this.tasksRepository.deleteTask(id);
  }
}
