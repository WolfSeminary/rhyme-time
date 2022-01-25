import * as React from 'react';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';

export default function FetchMoreRhymes(props) {
    const [currentRhymesRange, setcurrentRhymesRange] = useState(props.rhymes.length > 10 ? 10 : props.rhymes.length)
    useEffect(() => {
        setcurrentRhymesRange(props.rhymes.length > 10 ? 10 : props.rhymes.length-1)
    }, [props.rhymes.length]);
    return (
        <Button variant="contained">Fetch more Rhymes ({currentRhymesRange}/{props.rhymes.length-1})</Button>
    );
}
