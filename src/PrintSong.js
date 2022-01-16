import React, { useState } from 'react';
import Button from '@mui/material/Button';

const PrintSong = () => {
  const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false)
  const onPrintSongClick = () => {
    setShouldShowThankYouModal(true)
  }
  return (
    <Button variant="contained" disableElevation onClick={onPrintSongClick}>
      Print Designed Song
    </Button>
  );
}
export default PrintSong
