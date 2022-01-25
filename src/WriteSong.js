import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useThemeProps } from '@mui/material';

export default function MultilineTextFields(props) {
  const [song, setSong] = React.useState("");
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(props.song);
  };
  const onWriteSong = (event) => {
     props.setSong(event.target.value)
    console.log("the current song: " + song);
  };
  return (
    <div style={{ display: "flex" }} style={{}}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        fullWidth
      >
        <div >
          <TextField
            value={props.song}
            style={{ backgroundImage: `url(${props.image})`, backgroundSize: "150px 200px" }}
            id="outlined-multiline-static"
            label="Write Song"
            multiline
            fullWidth
            rows={4}
            onChange={onWriteSong}
          />
        </div>
      </Box></div>
  );

}

