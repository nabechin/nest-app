import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import { TaskActionCreater } from '../../../actions/';
import { TaskRepository } from '../../../repository/taskRepository/TaskRepository';
import { TaskUseCase } from '../../../usecase/taskUsecase/TaskUsecase';

type Props = {
  id: string;
  title: string;
  deleteTask: (id: string) => Promise<void>;
};

const TaskList = (props: Props): JSX.Element => {
  const { id, title } = props;
  const onHandleClick = (id: string) => {
    props.deleteTask(id);
  };
  return (
    <>
      <ListItem>
        <ListItemText>{title}</ListItemText>
        <button onClick={() => onHandleClick(id)}>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </ListItem>
      <Divider />
    </>
  );
};

const taskActionCreater = new TaskActionCreater(
  new TaskUseCase(new TaskRepository())
);

const deleteTask = taskActionCreater.deleteTask;

export default connect(null, { deleteTask })(TaskList);
