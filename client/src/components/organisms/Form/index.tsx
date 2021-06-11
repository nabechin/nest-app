import React, { useRef } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { CreateTaskFormValue } from '../../../entity/task';

interface Props {
  buttonText?: string;
  onHandleSubmit?: (createTaskFormValue: CreateTaskFormValue) => void;
}

export const Form = (props: Props): JSX.Element => {
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const onSubmit = () => {
    if (inputTitleRef.current != null && props.onHandleSubmit) {
      const title = inputTitleRef.current.value;
      props.onHandleSubmit({ title });
    }
  };
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
          ref={inputTitleRef}
        ></TextField>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          {props.buttonText}
        </Button>
      </div>
    </form>
  );
};
