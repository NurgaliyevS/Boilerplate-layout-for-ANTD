import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import Homepage from '../pages/Homepage';

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<PageLayout />}>
        <Route index element={<Homepage title='Homepage' />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
