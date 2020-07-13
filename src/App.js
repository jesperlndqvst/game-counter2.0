import React, { useState } from 'react';
import './App.css';

// Pages

import Start from './pages/Start';
import Game from './pages/Game';
import NotFound from './pages/NotFound';

const App = () => {
  const [players, setPlayers] = useState([
    {
      id: 1,
      username: '',
      score: 0,
    },
    {
      id: 2,
      username: '',
      score: 0,
    },
    {
      id: 3,
      username: '',
      score: 0,
    },
    {
      id: 3,
      username: '',
      score: 0,
    },
    {
      id: 4,
      username: '',
      score: 0,
    },
    {
      id: 5,
      username: '',
      score: 0,
    },
  ]);
  const [gameIsStarted, setGameIsStarted] = useState(false);

  const updatePlayer = (e) => {
    const value = e.target.value;

    console.log(e.target);
    console.log(players);

    setPlayers(players[0].username = value);
    console.log(players);
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
