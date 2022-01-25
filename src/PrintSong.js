import React, { forwardRef, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import ThankYouModal from './ThankYouModal';
import ReactToPrint from 'react-to-print';
import { ComponentToPrint } from './';
import MultilineTextFields from './WriteSong';
import { FunctionalComponentToPrint } from './WriteSong';
import BackGround from './BackGround';

const PrintSong = () => {
  const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false);
  const componentRef = useRef();
  const onPrintSongClick = () => {
    setShouldShowThankYouModal(true)
  }
  return (<>
      <Button variant="contained" disableElevation onClick={onPrintSongClick}>
      Print Designed Song</Button>
    {shouldShowThankYouModal && <ThankYouModal shouldShowThankYouModal={setShouldShowThankYouModal} />}
  </>
  );
}
export default PrintSong
