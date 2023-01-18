import * as React from 'react';
import { Typography, Box, TextField, Button, Checkbox, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import DoneIcon from '@mui/icons-material/Done';

function ConditionalForm() {

    const [conditional, setConditional] = React.useState('');

    const handleChange = (event) => {
        setConditional(event.target.value);
    };


  return (
    <>
      <Box display="flex" >
        <Button variant="outlined" sx={{m: 1, p:1}} ><RemoveIcon /></Button>
        <TextField id="outlined-basic" label="Variable" variant="outlined"
        sx={{ width: '25ch' }}
        noValidate />
        <FormControl>
            <InputLabel id="conditional-select"><DoneIcon /></InputLabel>
            <Select sx={{ width: '7ch' }}
                labelId="conditional-select"
                id="conditional-select"
                value={conditional}
                label="Conditional"
                onChange={handleChange}
            >
                <MenuItem value={2}>&gt;</MenuItem>
                <MenuItem value={1}>&ge;</MenuItem>
                <MenuItem value={0}>=</MenuItem>
                <MenuItem value={-1}>&le;</MenuItem>
                <MenuItem value={-2}>&lt;</MenuItem>

            </Select>
            </FormControl>
        <TextField id="outlined-basic" label="Value" variant="outlined" />
      </Box>
      <div>
        <Typography>Alert type(s):</Typography>
            <Checkbox></Checkbox>Email
            <Checkbox></Checkbox>Text
            <Checkbox></Checkbox>Dashboard
      </div>
    </>
  );
  
}

export default ConditionalForm;