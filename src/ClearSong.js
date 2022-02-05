import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ClearIcon from '@mui/icons-material/Clear';

export default function ClearSong({ onClick }) {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="Clear" onClick={onClick}>
        <ClearIcon />
      </IconButton>
    </Stack>
  );
}
