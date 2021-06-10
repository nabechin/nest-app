import React from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

interface Props {
  buttonText?: string;
  onHandleSubmit?: () => void;
}

export const Form = (props: Props): JSX.Element => {
  return (
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
        <Button
          variant="contained"
          color="primary"
          onClick={props.onHandleSubmit}
        >
          {props.buttonText}
        </Button>
      </div>
    </form>
  );
};
