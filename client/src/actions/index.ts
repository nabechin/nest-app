import { Dispatch, Action } from 'redux';
import { CREATE_TASK, GET_TASKS, DELETE_TASK } from './types';
import { CreateTaskFormValue } from '../entity/task';
import { TaskUseCase } from '../usecase/taskUsecase/TaskUsecase';
import { TaskRepository } from '../repository/taskRepository/TaskRepository';

export const createTask =
  (createTaskFormValue: CreateTaskFormValue) =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    const taskUseCase = new TaskUseCase(new TaskRepository());
    const task = await taskUseCase.createTask(createTaskFormValue);
    dispatch({ type: CREATE_TASK, payload: task });
  };

export const getTasks =
  () =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    const taskUseCase = new TaskUseCase(new TaskRepository());
    const tasks = await taskUseCase.getTasks();
    dispatch({ type: GET_TASKS, payload: tasks });
  };

export const deleteTask =
  (id: string) =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    const taskUseCase = new TaskUseCase(new TaskRepository());
    await taskUseCase.deleteTask(id);
    dispatch({ type: DELETE_TASK, payload: id });
  };
