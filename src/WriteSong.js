import React, { forwardRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useThemeProps } from '@mui/material';

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
        <div >
          <TextField 
          style = {{backgroundImage:`url(${props.image})`,backgroundSize :"150px 200px"}}
            id="outlined-multiline-static"
            label="Write Song"
            multiline
            fullWidth
            rows={4}
            onChange={onWriteSong}
          />
        </div>
        <div ref = {ref}  style = {{backgroundImage:`url(${props.image})`,height:'100%',backgroundSize:'100%',fontSize:'100px'}} className="divToPrint">
          {song}
        </div>
      </Box>
    </div>
  );
})
export default MultilineTextFields
