import React from 'react';
import { CreateTaskAction } from '../../actions/types';
import { CreateTaskFormValue } from '../../entity/task';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Form } from '../../components/organisms/Form';
import { WorkList } from '../../components/organisms/WorkList';
import { createTask } from '../../actions';

type Props = {
  createTask: (createTaskFormValue: CreateTaskFormValue) => CreateTaskAction;
};

const Top = (props: Props): JSX.Element => {
  const onHandleSubmit = (createTaskFormValue: CreateTaskFormValue) => {
    props.createTask(createTaskFormValue);
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
          <WorkList></WorkList>
          <WorkList></WorkList>
          <WorkList></WorkList>
        </Grid>
      </Grid>
    </Container>
  );
};

export default connect(null, { createTask })(Top);
