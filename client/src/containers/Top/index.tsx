import React, { useEffect } from 'react';
import { CreateTaskFormValue, FilterTask, Task } from '../../entity/task';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Form } from '../../components/organisms/Form';
import TaskList from '../../components/organisms/TaskList';
import { TaskState } from '../../state/types';
import { createTask, getTasks, filterTask } from '../../actions';

type Props = {
  createTask: (createTaskFormValue: CreateTaskFormValue) => Promise<void>;
  getTasks: () => Promise<void>;
  filterTask: (filterTask: FilterTask) => Promise<void>;
  tasks: Task[];
};

const Top = (props: Props): JSX.Element => {
  const { tasks } = props;
  useEffect(() => {
    props.getTasks();
  }, []);
  const renderTasks = (tasks: Task[]): JSX.Element[] => {
    return tasks.map((task) => {
      return <TaskList key={task.id} {...task}></TaskList>;
    });
  };
  return (
    <Container>
      <Grid container style={{ padding: '100px' }} spacing={2}>
        <Grid item sm={12}>
          <Form
            buttonText="add"
            onHandleSubmit={(createTaskFormValue: CreateTaskFormValue) => {
              props.createTask(createTaskFormValue);
            }}
          ></Form>
        </Grid>
        <Grid item sm={12}>
          <Form
            buttonText="search"
            onHandleSubmit={(filterTask: FilterTask) => {
              props.filterTask(filterTask);
            }}
          ></Form>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={8}>
          {renderTasks(tasks)}
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state: { task: TaskState }) => {
  return {
    tasks: Object.values(state.task),
  };
};

export default connect(mapStateToProps, { createTask, getTasks, filterTask })(
  Top
);
