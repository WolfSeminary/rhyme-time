import React, { forwardRef, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import ThankYouModal from './ThankYouModal';
import ReactToPrint from 'react-to-print';
import { ComponentToPrint } from './';
import MultilineTextFields from './WriteSong';
import { FunctionalComponentToPrint } from './WriteSong';
import BackGround from './BackGround';

/////////////////////////
const PrintSong = React.forwardRef((props, ref) => {
  const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false);
  ////////////////
  const componentRef = useRef();
  const onPrintSongClick = () => {
    // var content = document.getElementById("aaa");
    // debugger;
    // var pri = document.getElementById("ifmcontentstoprint").contentWindow;
    // pri.document.open();
    // pri.document.write(content.outerHTML);
    // pri.document.close();
    // pri.focus();
    // pri.print()
    setShouldShowThankYouModal(true)
  }

  return (<>
    {/* <iframe id="ifmcontentstoprint" style={{ height: "0px", width: "0px" }}></iframe>
    <div id="aaa">
      <h1>tfrtgyih</h1>
      <h3>crtd68ftgihy</h3>
    </div> */}
    <MultilineTextFields ref={componentRef} style={BackGround:}/>
    <BackGround />
    <ReactToPrint
      trigger={() => 
      <Button variant="contained" disableElevation onClick={onPrintSongClick}>
      Print Designed Song
    </Button>}
      content={() => componentRef.current}
    />
    

    
    {shouldShowThankYouModal && <ThankYouModal shouldShowThankYouModal={setShouldShowThankYouModal} />}
  </>
  );
})

export default PrintSong

