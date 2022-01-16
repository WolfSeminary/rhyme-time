import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ThankYouModal from './ThankYouModal'
const PrintSong = () => {
  const [shouldShowThankYouModal,setShouldShowThankYouModal]=useState(false);
  
  const onPrintSongClick = () => {
    setShouldShowThankYouModal(true)
  }
  return (<>
     <Button variant="contained" disableElevation onClick={onPrintSongClick}>
      Print Designed Song
    </Button>
   {shouldShowThankYouModal && <ThankYouModal/>}
    </>
   
    );
}
export default PrintSong
