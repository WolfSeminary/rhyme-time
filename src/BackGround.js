import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@mui/material";
import { useState } from 'react';

function Background({ onChange }) {
  const [backgrounds, setBackgrounds] = useState([
    { id: 1, name: "Background A", url: "./backgrounds/picture1.jpg" },
    { id: 2, name: "Background B", url: "./backgrounds/picture2.jpg" },
    { id: 3, name: "Background C", url: "./backgrounds/picture3.jpg" },
  ])

  return (
    <FormControl component="fieldset" >
      <FormLabel component="legend">Choose a Background</FormLabel>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {backgrounds.map(item => <FormControlLabel key={item.id} value={item.name} control={<Radio />} label={item.name} onChange={() => { onChange(item) }} />)}

      </RadioGroup>
    </FormControl>
  );
}

export default Background;