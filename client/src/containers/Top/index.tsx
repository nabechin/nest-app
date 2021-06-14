import React, { useEffect } from 'react';
import { TaskAction } from '../../actions/types';
import { CreateTaskFormValue, Task } from '../../entity/task';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Form } from '../../components/organisms/Form';
import { TaskList } from '../../components/organisms/TaskList';
import { createTask, getTasks } from '../../actions';
import { TaskState } from '../../state/types';

type Props = {
  createTask: (createTaskFormValue: CreateTaskFormValue) => Promise<void>;
  getTasks: () => Promise<void>;
  tasks: Task[];
};

const Top = (props: Props): JSX.Element => {
  const { tasks } = props;
  useEffect(() => {
    props.getTasks();
  }, []);
  const onHandleSubmit = (createTaskFormValue: CreateTaskFormValue) => {
    props.createTask(createTaskFormValue);
  };

  const renderTasks = (tasks: Task[]): JSX.Element[] => {
    return tasks.map((work) => {
      return <TaskList key={work.id} {...work}></TaskList>;
    });
  };
  return (
    <Container>
      <Grid container style={{ padding: '100px' }} spacing={2}>
        <Grid item sm={12}>
          <Form buttonText="add" onHandleSubmit={onHandleSubmit}></Form>
        </Grid>
        <Grid item sm={12}>
          <Form buttonText="search"></Form>
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
export default connect(mapStateToProps, { createTask, getTasks })(Top);
