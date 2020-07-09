import React, { useState } from 'react';
import './App.css';

// Pages

import Start from './pages/Start';
import Game from './pages/Game';
import NotFound from './pages/NotFound';


const App = () => {
  const [players, setPlayers] = useState({
    player1: {
      username: '',
      score: 0,
    },
    player2: {
      username: '',
      score: 0,
    },
    player3: {
      username: '',
      score: 0,
    },
    player4: {
      username: '',
      score: 0,
    },
    player5: {
      username: '',
      score: 0,
    },
    player6: {
      username: '',
      score: 0,
    },
  });
  const [gameIsStarted, setGameIsStarted] = useState(false);

  const updatePlayer = (e) => {
    const value = e.target.value;
    setPlayers({
      ...players,
      [e.target.id]: {
        username: value,
        score: 0,
      },
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
        <Game players={players} />
      )}
    </div>
  );
};

export default App;
