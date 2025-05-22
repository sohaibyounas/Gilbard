import React from 'react';
import { Box, Button as MuiButton } from '@mui/material';

const Button = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <MuiButton variant="contained" sx={{ borderRadius: "25px", backgroundColor: "#fff", color: "#000", padding: "10px 30px", fontSize: "20px",}}>
        BUY NOW
      </MuiButton>
    </Box>
  );
}

export default Button;