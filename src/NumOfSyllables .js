import { Box, TextField } from '@mui/material';

export default function NumOfSyllables({ onChange, numOfSyllables }) {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Number of Syllables" variant="outlined" type="number" value={numOfSyllables} onChange={onChange} />
    </Box>
  );
}