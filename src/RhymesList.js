import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function RhymesList(props) {
  const onCopyRhymeClick=(currentRhyme)=>{
    navigator.clipboard.writeText(currentRhyme);
  }
  return (
   
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index,value) => (
        <ListItem
          key={value}
          disableGutters
          secondaryAction={
            <IconButton onClick={()=>onCopyRhymeClick(props.rhymes[index])} >
              <ContentCopyIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`${value+1} ${props.rhymes[index].word} `} />
        </ListItem>
      ))}
    </List>
  );
}