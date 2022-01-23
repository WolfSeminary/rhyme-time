import * as React from 'react';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ClearIcon from '@mui/icons-material/Clear';

export default function IconButtons() {
  let [song, setSong] = useState("")
  const onClearSongClick = () => {
    setSong("");
  }
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="Clear" onClick={onClearSongClick}>
        <ClearIcon />
      </IconButton>
    </Stack>
  );
}
