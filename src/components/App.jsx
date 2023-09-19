import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const MovieDetails = lazy(() => import('./MovieDetails'));


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </Suspense>
  );
}

export default App;




