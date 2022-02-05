import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function RhymesList({ rhymes, currentRange }) {
  const onCopyRhymeClick = (currentRhyme) => {
    navigator.clipboard.writeText(currentRhyme);
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {rhymes.slice(currentRange - 10, currentRange).map((item, index) => (
        <ListItem
          key={index}
          disableGutters
          secondaryAction={
            <IconButton onClick={() => onCopyRhymeClick(item.word)} >
              <ContentCopyIcon />
            </IconButton>
          }>
          <ListItemText primary={`${index + 1} ${item.word} `} />
        </ListItem>
      ))
      }
    </List>
  );
}