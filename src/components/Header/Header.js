import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <React.Fragment>
      <Toolbar
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: 2,
          mb: 6,
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Word Game
        </Typography>
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;
