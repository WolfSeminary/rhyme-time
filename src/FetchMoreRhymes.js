import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function FetchMoreRhymes(props) {
    const [currentRhymesRange, setcurrentRhymesRange] = useState(10)
    const fetchRhymes = () => { setcurrentRhymesRange( currentRhymesRange + 10) }
    return (
         <Button variant="contained">Fetch more Rhymes ({currentRhymesRange}/{props.rhymes.length})</Button>  
    );
}
