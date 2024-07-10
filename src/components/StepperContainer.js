import { AppBar, Box, Container, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import HorizontalStepper from './HorizontalStepper';

const StepperContainer = () => {
  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6'>Paprawat Cricket ScoreBoard❤️❤️</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box marginTop={10}>
          <HorizontalStepper />
        </Box>
      </Container>
      <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f5f5f5', textAlign: 'center', padding: '10px 0' }}>
        <Typography variant="body2" color="textSecondary">
          Made with ❤️ By Prashant Bhardwaj🚀
        </Typography>
      </footer>
    </div>
  );
};

export default StepperContainer;
