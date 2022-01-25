import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect, useContext } from 'react';
import { RhymeContext } from './App';
// import _cloneDeep from 'lodash/cloneDeep';
// import R from "ramda"
// import _ from 'ramda';
// import _ from "lodash"; // cool kids know _ is low-dash


export default function NumOfSyllables(props) {
  const { rhymeListFilter, setRhymeListFilter } = useContext(RhymeContext);
  const [numOfSyllables, setNumOfSyllables] = useState(0);
  const [ezer, setezer] = useState([]);
   //const ezer =[...rhymeListFilter]
   useEffect(() => {
     
    if(ezer.length === 0 && rhymeListFilter.length){
      setezer(rhymeListFilter.map(a => {return {...a}}))
    }
   
  }, [rhymeListFilter]);
  
  useEffect(() => {

    if (numOfSyllables != null && numOfSyllables > 0&&ezer!=null) {
      debugger;
      const arr = ezer.filter(e => e.syllables === numOfSyllables)
      setRhymeListFilter(arr)
    }
    debugger;
  }, [numOfSyllables]);

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