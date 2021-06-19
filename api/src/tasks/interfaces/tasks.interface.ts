export interface Task {
  id: string;
  title: string;
}

export interface ResponseTask {
  [key: string]: Task;
}

export interface ResponseTasks {
  [key: string]: Task[];
}
