import React from 'react';
import './App.css';
import { Router } from '@reach/router';

// Pages

import Start from './pages/Start';
import Game from './pages/Game';
import NotFound from './pages/NotFound';

// Components

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Start path='/' />
        <Game path='/game' />
        <NotFound default />
      </Router>
    </div>
  );
};

export default App;
