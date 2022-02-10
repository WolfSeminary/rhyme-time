import { Box, TextField } from '@mui/material';

export default function WordToRhyme({ onChange }) {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" onChange={(e) => onChange(e.target.value)} label="Type a Word" variant="outlined" />
    </Box>
  );
}


