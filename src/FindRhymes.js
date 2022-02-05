import Button from '@mui/material/Button';
import * as React from 'react';

export default function FindRhymes({ onClick }) {
  return <Button variant="contained" onClick={onClick}>Find Rhymes</Button>;
}