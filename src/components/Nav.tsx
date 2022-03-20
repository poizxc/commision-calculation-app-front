import React from 'react';
import { AppBar, Container, Toolbar, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { CALCULATE_COMMISION_PAGE, RESULTS_PAGE } from '../constants/pages';

function Nav() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex' }}>
            <Link to={CALCULATE_COMMISION_PAGE} className="nav-link">
              <Button sx={{ color: 'white', display: 'block' }}>
                calculate
              </Button>
            </Link>
            <Link to={RESULTS_PAGE} className="nav-link">
              <Button
                sx={{
                  color: 'white',
                  display: 'block',
                }}
              >
                result
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
