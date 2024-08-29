import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Game from '../Game';
import Header from '../Header';

function App() {
  return (
    <React.Fragment>
      <Box
        component="section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          px: '0px',
        }}
      >
        <Header />
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid item xs={7} md={4} lg={3}>
            <Game />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default App;
