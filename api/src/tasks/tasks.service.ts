import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDto } from '../tasks/dto/createTask.dto';
import { v4 as uuid } from 'uuid';
import { Task, TaskDocument } from './schemas/task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}
  private tasks = [
    { id: '1', title: 'title1' },
    { id: '2', title: 'title2' },
    { id: '3', title: 'title3' },
    { id: '4', title: 'title4' },
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    try {
      const { title } = createTaskDto;
      const task = new this.taskModel({ id: uuid(), title });
      await task.save();
      return task;
    } catch (error) {
      console.log(error);
    }
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
