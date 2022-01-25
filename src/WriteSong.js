import React, { forwardRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MultilineTextFields = React.forwardRef((props, ref) => {
  const [song, setSong] = React.useState("");
  const [value, setValue] = React.useState('Controlled');
  const handleChange = (event) => {
    setValue(song);
  };
  const onWriteSong = (event) => {
    setSong(event.target.value);
    console.log("the current song: " + song);
  };
  return (
    <div  style={{ display: "flex" }}>
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
            onChange={onWriteSong}
          />
        </div>
        <div ref = {ref}  style = {{backgroundColor:'red'}} className="divToPrint">
          {song}
        </div>
      </Box>
    </div>
  );
})
export default MultilineTextFields
