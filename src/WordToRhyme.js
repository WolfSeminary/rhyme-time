import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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


