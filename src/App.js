import * as React from 'react';
import './App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

import ResponsiveNavBar from './components/ResponsiveNavBar';
import MediaCard from './components/MediaCard';
import CarouselHero from './components/CarouselHero';

import axios from "axios";

function App() {
  const [post, setPost] = React.useState(null);

  const cardContent = [];

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  React.useEffect(() => {
    axios({
      url: "https://api.baserow.io/api/database/rows/table/121195/?user_field_names=true",
      headers: {
        Authorization: "Token 6hZhot0bqaECqGrmaiJSFHWj4kfhoFgr"
      }
    }).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  post.results.forEach(d => { 
    const logoData = d.Logo[0] ? d.Logo[0] : "null";
    cardContent.push(
                  <Grid2 key={d.id}>
                    <MediaCard
                      imgSrc={logoData.url}
                      imgAlt={logoData.visible_name}
                      title={d.Name}
                      content={d.Description}
                      />
                  </Grid2>
    );
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveNavBar />
          <Box sx={{mt: '3rem' }} >
            <CarouselHero />
          </Box>
        <Container sx={{mt: '2rem' }} >
          <Grid2 container justifyContent='center' rowSpacing={{ xs: 1, md: 2 }} columnSpacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
            {cardContent}
          </Grid2>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;