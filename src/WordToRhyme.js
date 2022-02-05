import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { useState,useContext } from 'react';
// import RhymesList from './RhymesList'
// import Button from '@mui/material/Button';
// import FetchMoreRhymes from './FetchMoreRhymes';
// import NumOfSyllables from './NumOfSyllables '
// import { RhymeContext } from './App';

export default function WordToRhyme({ onChange}) {

  // const { rhymeListFilter, setRhymeListFilter } = useContext(RhymeContext);

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
      noValidate
      autoComplete="off"
    >
     {/* <Button variant="contained" onClick={fetchRhymes}>Find Rhymes</Button>*/}
      <TextField id="outlined-basic" onChange={(e) => onChange(e.target.value)} label="Type a Word" variant="outlined" />


    </Box>
  );
}


