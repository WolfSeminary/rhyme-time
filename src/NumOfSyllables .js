import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState,useEffect } from 'react';

export default function NumOfSyllables(props) {
  const [numOfSyllables, setNumOfSyllables] = useState(0);
useEffect(() => {
  
}, []);
  const onNumOfSyllablesChange = (e) => {
    setNumOfSyllables(e.target.value);
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      
    >
      <TextField id="outlined-basic" label="Number of Syllables" variant="outlined" type="number" value={numOfSyllables} onChange={onNumOfSyllablesChange} />
    
    </Box>
  );
}