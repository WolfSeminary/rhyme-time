import Button from '@mui/material/Button';

export default function FetchMoreRhymes({currentRhymesRange,rhymesLength}) {
    return (
        <Button variant="contained">Fetch more Rhymes ({currentRhymesRange}/{rhymesLength})</Button>
    );
}
