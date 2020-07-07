import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';

// Pages

import Start from './pages/Start';
import Game from './pages/Game';
import NotFound from './pages/NotFound';

// Components

const App = () => {
  const [players, setPlayers] = useState({});

  const updatePlayers = (e) => {
    const value = e.target.value;
    setPlayers({
      ...players,
      [e.target.id]: value,
    });
  };

  console.log(players);

  return (
    <div className='App'>
      <Router>
        <Start path='/' players={players} updatePlayers={updatePlayers} />
        <Game path='/game' players={players} />
        <NotFound default />
      </Router>
    </div>
  );
};

export default App;
