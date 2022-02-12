import React, { forwardRef } from 'react';
import { TextField, Box } from '@mui/material';

const WriteSong = forwardRef(({ onChange, background, song }, ref) => {
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
        <div >
          <TextField
            value={song}
            style={{ backgroundImage: `url(${background})`, backgroundSize: "150px 200px" }}
            id="outlined-multiline-static"
            label="Write Song"
            multiline
            fullWidth
            rows={4}
            onChange={onChange}
          />
        </div>
        <div ref={ref} style={{ backgroundImage: `url(${background})`, height: '100%', backgroundSize: '100%', fontSize: '100px' }} className="divToPrint">
          {song}
        </div>
      </Box>
    </div>
  );
})
export default WriteSong;
