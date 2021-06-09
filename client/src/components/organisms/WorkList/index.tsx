import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Divider } from '@material-ui/core';

export const WorkList = (): JSX.Element => {
  return (
    <>
      <ListItem>
        <ListItemText>task1</ListItemText>
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
      </ListItem>
      <Divider />
    </>
  );
};
