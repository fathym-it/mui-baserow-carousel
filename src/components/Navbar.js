import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Grid, Tabs, Tab } from '@mui/material';
import fathymlogo from './../Thinky.svg';

const Navbar = () => {
    const [value, setValue] = useState()
    return (
        <>
        <AppBar position="static">
          <Toolbar>
              <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                <img class="Fathym-logo" src={fathymlogo} alt="Logo" />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Fathym
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button color="inherit">Technology</Button>
                <Button color="inherit">APIs</Button>
                <Button color="inherit">Blog</Button>
                <Button color="inherit">Docs</Button>
              </Stack>
          </Toolbar>
        </AppBar>
    <AppBar position="static">
    <Toolbar>
    <Grid container>
        <Grid item xs={2}>
            <img class="Fathym-logo" src={fathymlogo} alt="Logo" />
        </Grid>
        <Grid item xs={5}>
            <Tabs value={value} onChange={(e, val) => setValue(val)}>
                <Tab label="Tech" />
                <Tab label="Services" />
                <Tab label="Docs" />
                <Tab label="News" />
                <Tab label="Products" />
            </Tabs>
        </Grid>
    </Grid>
    </Toolbar>
    </AppBar>
    </>
    )
}

export default Navbar;