import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/createTask.dto';
import { FilterTasksDto } from './dto/filterTasks.dto';
import { Task, TaskDocument } from './schemas/task.schema';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksRepository {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}
  async getAllTasks(filterTasksDto: FilterTasksDto): Promise<Task[]> {
    const model = this.taskModel;
    const query = {};
    const { title } = filterTasksDto;
    if (title) {
      query['title'] = { $regex: '.*' + title + '.*', $options: 'i' };
    }
    return await model.find(query).select('-_id id title').exec();
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

  async deleteTask(id: string): Promise<void> {
    const result = await this.taskModel.deleteOne({ id }).exec();
    if (result.n === 0) {
      throw new NotFoundException();
    }
  }
}
