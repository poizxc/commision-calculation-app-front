import React from 'react';

import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import CommisionForm from './components/CommisionForm';
import Nav from './components/Nav';
import Notifications from './components/Notifications';
import Results from './components/Results';
import {
  CALCULATE_COMMISION_PAGE,
  ROOT_PAGE,
  RESULTS_PAGE,
} from './constants/pages';

function App() {
  return (
    <>
      <Nav />
      <Container className="main-container" maxWidth="sm">
        <Routes>
          <Route path={ROOT_PAGE} element={<CommisionForm />} />
          <Route path={CALCULATE_COMMISION_PAGE} element={<CommisionForm />} />
          <Route path={RESULTS_PAGE} element={<Results />} />
        </Routes>
        <Notifications />
      </Container>
    </>
  );
}

export default App;
