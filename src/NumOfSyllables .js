import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect, useContext } from 'react';
import { RhymeContext } from './App';
export default function NumOfSyllables(props) {
  const [numOfSyllables, setNumOfSyllables] = useState(0);
  const { rhymeListFilter, setRhymeListFilter } = useContext(RhymeContext);

  const onNumOfSyllablesChange = (e) => {
    setNumOfSyllables(e.target.value);

    if (e.target.value) {
      debugger;
      const arr = rhymeListFilter.filter(e => e.syllables === numOfSyllables)
      setRhymeListFilter(arr)
    }
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