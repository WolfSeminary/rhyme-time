import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, Stack } from '@mui/material';

export default function ClearSong({ onClick }) {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="Clear" onClick={onClick}>
        <ClearIcon />
      </IconButton>
    </Stack>
  );
}
