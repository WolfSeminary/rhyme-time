import * as React from 'react';
import Button from '@mui/material/Button';

export default function FetchMoreRhymes({currentRhymesRange,setCurrentRhymesRange,rhymesLength}) {
    return (
        <Button variant="contained">Fetch more Rhymes ({currentRhymesRange}/{rhymesLength})</Button>
    );
}
