import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/tasks.interface';
import { CreateTaskDto } from '../tasks/dto/createTask.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks = [
    { id: '1', title: 'title1' },
    { id: '2', title: 'title2' },
    { id: '3', title: 'title3' },
    { id: '4', title: 'title4' },
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title } = createTaskDto;
    this.tasks.push({ id: uuid(), title });
    console.log({ id: uuid(), title });
    return { id: uuid(), title };
  }
}
