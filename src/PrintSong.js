import React from 'react';
import Button from '@mui/material/Button';
import ThankYouModal from './ThankYouModal'
const PrintSong = () => {
  const [shouldShowThankYouModal,setShouldShowThankYouModal]=useState(false);
  return (<>
    <Button variant="contained" disableElevation>
      Print Designed Song
    </Button>
   {shouldShowThankYouModal && <ThankYouModal/>}
    </>);
}
export default PrintSong
