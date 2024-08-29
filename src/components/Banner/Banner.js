import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  zIndex: '1',
  top: '0',
  left: '0',
  bgcolor: 'rgba(0, 0, 0, 0.9)',
  width: '100%',
  height: '100vh',
};

function Banner({ status, children }) {
  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <Box sx={style}>
      <div className={`${status} banner`}>
        {children}{' '}
        <Button
          variant="outlined"
          size="lg"
          sx={{ mt: 2, borderColor: 'white', color: 'white' }}
          onClick={handleRestart}
        >
          Restart
        </Button>
      </div>
    </Box>
  );
}

export default Banner;
