import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
//import ContentCopyIcon from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
//import {  Comment as CommentIcon } from '@mui/icons-material'

export default function RhymesList() {
  const [rhymes,setRhymes]=useState();
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
        <ListItem
          key={value}
          disableGutters
          secondaryAction={
            <IconButton>
              <ContentCopyIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`Rhyme ${value}`} />
        </ListItem>
      ))}
    </List>
  );
}