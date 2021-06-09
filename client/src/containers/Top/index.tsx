import React from 'react';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Form } from '../../components/organisms/Form';
import { WorkList } from '../../components/organisms/WorkList';

export const Top = (): JSX.Element => {
  return (
    <Container>
      <Grid container style={{ padding: '100px' }} spacing={2}>
        <Grid item sm={12}>
          <Form buttonText="add"></Form>
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
