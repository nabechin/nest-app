import React from 'react';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ListItem } from '@material-ui/core';
import { ListItemSecondaryAction } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';

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
                <Button variant="contained" color="primary">
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
                <Button variant="contained" color="primary">
                  search
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item sm={8}>
            <ListItem>
              <ListItemText>task1</ListItemText>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText>task2</ListItemText>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText>task3</ListItemText>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </ListItem>
            <Divider />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
