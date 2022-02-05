import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';

import ReactToPrint from 'react-to-print';

export default function PrintSong({ onClick, content }) {
  return (<>
    <div onClick={onClick}>
      <ReactToPrint
        trigger={() =>
          <Button variant="contained" disableElevation >
            Print Designed Song</Button>
        }
        content={content}
      /></div>



  </>
  );
}

