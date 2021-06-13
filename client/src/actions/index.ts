import { Dispatch, Action } from 'redux';
import { CREATE_TASK, TaskAction, GET_TASKS } from './types';
import { CreateTaskFormValue } from '../entity/task';
import { TaskUseCase } from '../usecase/taskUsecase/TaskUsecase';
import { TaskRepository } from '../repository/taskRepository/TaskRepository';

export const createTask = (
  createTaskFormValue: CreateTaskFormValue
): TaskAction => ({
  type: CREATE_TASK,
  payload: { id: '1', title: 'testtitle' },
});

export const getTasks =
  () =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    const taskUseCase = new TaskUseCase(new TaskRepository());
    const tasks = await taskUseCase.getTasks();
    dispatch({ type: GET_TASKS, payload: tasks });
  };
