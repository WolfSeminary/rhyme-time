import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import RhymesList from './RhymesList'

const WordToRhyme = () => {
  const [wordToRhyme, setWordToRhyme] = useState()
  const [rhymes, setrhymes] = useState()
  const fetchRhymes = (e) => {
    e.preventDefault();
    fetch(`https://rhymebrain.com/talk?function=getRhymes&word=${wordToRhyme}`)
      .then(response => response.json())
      .then((data) => setrhymes(data), console.log(rhymes)
      );
  }
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" onChange={(e) => setWordToRhyme(e.target.value)} label="Type a Word" variant="outlined" />
      {rhymes && <RhymesList rhymes={rhymes.map(i => i.word
      )} />}

    </Box>
  );
}

export default WordToRhyme