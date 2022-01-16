import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
const WordToRhyme= ()=> {
  const [wordToRhyme,setWordToRhyme]=useState(0)
   const fetchRhymes = (e) => {
     e.preventDefault();
     let list = []
     debugger;
    fetch(`https://rhymebrain.com/talk?function=getRhymes&word=${wordToRhyme}`)
    .then(response => response.json())
    .then(data => console.log(data));
        
  }
  return (
    <Box
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" onChange={(e) => setWordToRhyme(e.target.value)} label="Type a Word" variant="outlined" />
      <button onClick={fetchRhymes}>click</button>
    </Box>
   
  );
}

export default WordToRhyme 