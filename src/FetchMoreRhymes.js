import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function FetchMoreRhymes() {
    const [currentRhymesRange, setcurrentRhymesRange] = useState(0)
    const fetchRhymes = () => { setcurrentRhymesRange( currentRhymesRange + 10) }
    return (
        <Button variant="contained">Fetch more Rhymes({currentRhymesRange/this.state.rhymes})</Button>
    );
}