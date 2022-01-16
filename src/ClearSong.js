import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ClearIcon from '@mui/icons-material/Clear';

export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="Clear">
        <ClearIcon />
      </IconButton>
    </Stack>
  );
}