import React from 'react';
import { Box, Button as MuiButton } from '@mui/material';
import style from '../assets/css/style.js';

const Button = () => {
  return (
    <Box sx={style.butnBox}>
      <MuiButton variant="contained" sx={style.heroMuiButton}>
        BUY NOW
      </MuiButton>
    </Box>
  );
}

export default Button;