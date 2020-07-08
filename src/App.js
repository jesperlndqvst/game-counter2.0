import React, { useState } from 'react';
import './App.css';

// Pages

import Start from './pages/Start';
import Game from './pages/Game';
import NotFound from './pages/NotFound';

// Components

const App = () => {
  const [players, setPlayers] = useState({});
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [scores, setScores] = useState({});

  const updatePlayer = (e) => {
    const value = e.target.value;
    setPlayers({
      ...players,
      [e.target.id]: value,
    });
  };

  const startGame = (e) => {
    e.preventDefault();
    setGameIsStarted(true);
  };

  return (
    <div className='App'>
      {!gameIsStarted ? (
        <Start
          players={players}
          updatePlayer={updatePlayer}
          startGame={startGame}
        />
      ) : (
        <Game />
      )}
    </div>
  );
};

export default App;
