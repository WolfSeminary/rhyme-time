import React, { useState } from "react";
const componemt = () => {
    const [currentRhymesRange, setcurrentRhymesRange] = useState(0)
    const fetchRhymes = () => { setcurrentRhymesRange( currentRhymesRange + 10) }
    return (<></>);
}

export default componemt;