import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '../components/NotFound';
import ScoreBoard from '../components/ScoreBoard';
import StepperContainer from '../components/StepperContainer';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StepperContainer />} />
        <Route path="/score" element={<ScoreBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
