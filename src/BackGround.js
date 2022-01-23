import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {
  const [backgrounds,setBackgrounds]=React.useState([
    {id:1,name:"backgrounda",url:"./backgrounds/picture1.jpg"},
    {id:2,name:"backgroundb",url:"./backgrounds/picture2.jpg"},
    {id:3,name:"backgroundc",url:"./backgrounds/picture3.jpg"},
  ])
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Choose a Background</FormLabel>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="backgrounda" control={<Radio />} label="background a" />
        <FormControlLabel value="backgroundb" control={<Radio />} label="background b" />
        <FormControlLabel value="backgroundc" control={<Radio />} label="background c" />
      </RadioGroup>
    </FormControl>
  );
}