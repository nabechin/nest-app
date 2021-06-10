export type Task = {
  id: string;
  title: string;
};

export type CreateTaskFormValue = Pick<Task, Exclude<keyof Task, 'id'>>;
