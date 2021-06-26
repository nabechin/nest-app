import { Dispatch, Action } from 'redux';
import { CREATE_TASK, GET_TASKS, DELETE_TASK, FILTER_TASK } from './types';
import { CreateTaskFormValue, FilterTask } from '../entity/task';
import { ITaskUseCase } from '../usecase/taskUsecase/ITaskUsecase';

export class TaskActionCreater {
  constructor(private readonly taskUseCase: ITaskUseCase) {}
  createTask =
    (createTaskFormValue: CreateTaskFormValue) =>
    async (dispatch: Dispatch<Action>): Promise<void> => {
      const task = await this.taskUseCase.createTask(createTaskFormValue);
      dispatch({ type: CREATE_TASK, payload: task });
    };

  getTasks =
    () =>
    async (dispatch: Dispatch<Action>): Promise<void> => {
      const tasks = await this.taskUseCase.getTasks();
      dispatch({ type: GET_TASKS, payload: tasks });
    };

  deleteTask =
    (id: string) =>
    async (dispatch: Dispatch<Action>): Promise<void> => {
      await this.taskUseCase.deleteTask(id);
      dispatch({ type: DELETE_TASK, payload: id });
    };

  filterTask =
    (filterTask: FilterTask) =>
    async (dispatch: Dispatch<Action>): Promise<void> => {
      const tasks = await this.taskUseCase.filterTask(filterTask);
      dispatch({ type: FILTER_TASK, payload: tasks });
    };
}
