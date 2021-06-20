import React, { useRef } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

type Field = {
  title: string;
};

type Props = {
  buttonText?: string;
  onHandleSubmit?: <T extends Field>(fields: T) => void;
};

export const Form = (props: Props): JSX.Element => {
  const { buttonText, onHandleSubmit } = props;
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const onSubmit = () => {
    if (inputTitleRef.current != null && onHandleSubmit) {
      const title = inputTitleRef.current.value;
      onHandleSubmit({ title });
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
          inputRef={inputTitleRef}
        ></TextField>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          {buttonText}
        </Button>
      </div>
    </form>
  );
};
