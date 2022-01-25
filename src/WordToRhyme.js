import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import RhymesList from './RhymesList'
import Button from '@mui/material/Button';
import FetchMoreRhymes from './FetchMoreRhymes';
import NumOfSyllables from './NumOfSyllables '
import { RhymeContext } from './App';

const WordToRhyme = () => {
  const [wordToRhyme, setWordToRhyme] = useState()
  const [rhymes, setrhymes] = useState()
  const {rhymeListFilter,setRhymeListFilter}=React.useContext(RhymeContext);
  const fetchRhymes = (e) => {
    e.preventDefault();
    fetch(`https://rhymebrain.com/talk?function=getRhymes&word=${wordToRhyme}`)
      .then(response => response.json())
      .then(data =>{ debugger;setRhymeListFilter(data);setrhymes(data)})
      ;
  }
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
      noValidate
      autoComplete="off"
    >
      <Button variant="contained" onClick={fetchRhymes}>Find Rhymes</Button>
      <TextField id="outlined-basic" onChange={(e) => setWordToRhyme(e.target.value)} label="Type a Word" variant="outlined" />
      {rhymes && <RhymesList rhymes={rhymeListFilter} />}
      {rhymes && <FetchMoreRhymes rhymes={rhymeListFilter.map(i => (i)
      )} />}

    </Box>
  );
}

export default WordToRhyme
