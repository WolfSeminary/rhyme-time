import Button from '@mui/material/Button';

export default function FetchMoreRhymes({ currentRhymesRange, onFetchMoreRhymesClick, rhymesLength }) {
    return <Button variant="contained" onClick={onFetchMoreRhymesClick}>Fetch more Rhymes ({currentRhymesRange}/{rhymesLength})</Button>;
}
