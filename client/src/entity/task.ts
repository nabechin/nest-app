export type Task = {
  id: string;
  title: string;
};

export type FilterTask = Pick<Task, Exclude<keyof Task, 'id'>>;

export type CreateTaskFormValue = Pick<Task, Exclude<keyof Task, 'id'>>;
