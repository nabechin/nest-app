import React, { useRef } from 'react';

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
  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (inputTitleRef.current && onHandleSubmit) {
      if (inputTitleRef.current.value) {
        const title = inputTitleRef.current.value;
        onHandleSubmit({ title });
      }
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
        <input
          aria-label={buttonText + 'input'}
          type="text"
          style={{ width: '400px' }}
          ref={inputTitleRef}
        ></input>
        <button onClick={onSubmit}>{buttonText}</button>
      </div>
    </form>
  );
};
