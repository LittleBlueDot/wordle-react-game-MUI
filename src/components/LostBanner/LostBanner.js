import React from 'react';
import Banner from '../Banner';
import { Typography } from '@mui/material';

function LostBanner({ answer }) {
  return (
    <Banner status="sad">
      <Typography sx={{ typography: 'h6' }}>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </Typography>
    </Banner>
  );
}

export default LostBanner;
