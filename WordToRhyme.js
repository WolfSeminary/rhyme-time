import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const WordToRhyme= ()=> {
  const[wordToRhyme ,setWordToRhyme]=useState;
  const onWordToRhymeChange=(e)=>{
   setWordToRhyme(e.target.value);
  }
  return (
    <Box
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Type a Word" variant="outlined" onChange={onWordToRhymeChange}/>
    </Box>
  );
}

export default WordToRhyme 