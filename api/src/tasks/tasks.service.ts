import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/tasks.interface';

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
}
