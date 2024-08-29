import React from 'react';
import Banner from '../Banner';
import { Typography } from '@mui/material';

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status="happy">
      <Typography>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </Typography>
    </Banner>
  );
}

export default WonBanner;
