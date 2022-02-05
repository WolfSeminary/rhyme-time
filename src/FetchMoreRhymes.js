import * as React from 'react';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';

export default function FetchMoreRhymes({currentRhymesRange,setCurrentRhymesRange,rhymesLength}) {
    // const [currentRhymesRange, setCurrentRhymesRange] = useState(rhymes.length > 10 ? 10 : rhymes.length)
    // useEffect(() => {
    //     setCurrentRhymesRange(rhymes.length > 10 ? 10 : rhymes.length-1)
    // }, [rhymes.length]);
    return (
        <Button variant="contained">Fetch more Rhymes ({currentRhymesRange}/{rhymesLength})</Button>
    );
}
