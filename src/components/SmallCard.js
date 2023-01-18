import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function SmallCard() {

  return (
    <Card sx={{ display: 'flex', width: 345, mb: '1rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '0 0 auto' }}>
          <Typography component="div" variant="h5">
            Load Prediction
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Electrical Load
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'bottom' }}>
            <Stack direction="row" spacing={1}>
            <Chip label="Temp F" />
            <Chip label="Wind Speed" variant="outlined" />
            </Stack>
          </Box>
        </CardContent>

      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}