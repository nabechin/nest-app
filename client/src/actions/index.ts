import { Dispatch, Action } from 'redux';
import { CREATE_TASK, GET_TASKS, DELETE_TASK, FILTER_TASK } from './types';
import {
  CreateTaskAction,
  GetTasksAction,
  DeleteTaskAction,
  FilterTaskAction,
} from './types';

import { CreateTaskFormValue, FilterTask } from '../entity/task';
import acitonCreatorFactory from 'typescript-fsa';
import { TaskUseCase } from '../usecase/taskUsecase/TaskUsecase';
import { TaskRepository } from '../repository/taskRepository/TaskRepository';

const actionCreator = acitonCreatorFactory();

export const TaskActions = {
  createTask: actionCreator<CreateTaskAction>(CREATE_TASK),
  getTasks: actionCreator<GetTasksAction>(GET_TASKS),
  deleteTask: actionCreator<DeleteTaskAction>(DELETE_TASK),
  filterTask: actionCreator<FilterTaskAction>(FILTER_TASK),
};

export const createTask =
  (createTaskFormValue: CreateTaskFormValue) =>
  async (dispatch: Dispatch<CreateTaskAction>): Promise<void> => {
    const taskUseCase = new TaskUseCase(new TaskRepository());
    const task = await taskUseCase.createTask(createTaskFormValue);
    dispatch({
      type: CREATE_TASK,
      payload: task,
    });
  };

export const getTasks =
  () =>
  async (dispatch: Dispatch<GetTasksAction>): Promise<void> => {
    const taskUseCase = new TaskUseCase(new TaskRepository());
    const tasks = await taskUseCase.getTasks();
    dispatch({ type: GET_TASKS, payload: tasks });
  };

export const deleteTask =
  (id: string) =>
  async (dispatch: Dispatch<DeleteTaskAction>): Promise<void> => {
    const taskUseCase = new TaskUseCase(new TaskRepository());
    await taskUseCase.deleteTask(id);
    dispatch({ type: DELETE_TASK, payload: id });
  };

export const filterTask =
  (filterTask: FilterTask) =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    const taskUseCase = new TaskUseCase(new TaskRepository());
    const tasks = await taskUseCase.filterTask(filterTask);
    dispatch({ type: FILTER_TASK, payload: tasks });
  };
