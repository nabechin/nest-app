import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Divider } from '@material-ui/core';

type Props = {
  title: string;
};

export const TaskList = (props: Props): JSX.Element => {
  const { title } = props;
  return (
    <>
      <ListItem>
        <ListItemText>{title}</ListItemText>
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
      </ListItem>
      <Divider />
    </>
  );
};
