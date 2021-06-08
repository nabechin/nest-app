import React from 'react';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';

export const App = (): JSX.Element => {
  return (
    <>
      <Container>
        <Grid container style={{ padding: '100px' }} spacing={2}>
          <Grid item sm={12}>
            <form>
              <div
                style={{
                  display: 'inline-flex',
                  gap: '10px',
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="task"
                  variant="outlined"
                  style={{ width: '400px' }}
                ></TextField>
                <Button variant="contained" color="secondary">
                  add
                </Button>
              </div>
            </form>
          </Grid>
          <Grid item sm={12}>
            <form>
              <div style={{ display: 'inline-flex', gap: '10px' }}>
                <TextField
                  id="outlined-basic"
                  label="search"
                  variant="outlined"
                  style={{ width: '400px' }}
                ></TextField>
                <Button variant="contained" color="secondary">
                  search
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
