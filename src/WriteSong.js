import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div style={{ display: "flex" }}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        fullWidth
      >
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Write Song"
            multiline
            fullWidth
            rows={4}
            defaultValue="Write the Song"
          />
        </div>
      </Box></div>
  );

}