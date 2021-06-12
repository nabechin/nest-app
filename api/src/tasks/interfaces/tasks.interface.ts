export interface Task {
  id: string;
  title: string;
}

export interface ResponseTasks {
  [key: string]: Task[];
}
