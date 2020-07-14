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
      id: 4,
      username: '',
      score: 0,
    },
    {
      id: 5,
      username: '',
      score: 0,
    },
    {
      id: 6,
      username: '',
      score: 0,
    },
  ]);

  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [activePlayer, setActivePlayer] = useState({});

  const updatePlayer = (e) => {
    const value = e.target.value;
    const id = parseInt(e.target.id);
    const playerId = players.find((el) => el.id === id).id;
    let newArray = [...players];
    newArray[playerId - 1].username = value;
    setPlayers(newArray);
  };

  const startGame = (e) => {
    e.preventDefault();
    setGameIsStarted(true);
    setPlayers(players.filter((players) => players.username !== ''));
  };

  const selectPlayer = (e) => {
    setActivePlayer(
      players.find((item) => item.username === e.currentTarget.dataset.id)
    );
  };

  const updateScore = () => {
    const playerId = activePlayer.id;
    let newArray = [...players];
    newArray[playerId - 1].score += 5;
    setPlayers(newArray);
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
        <Game
          players={players}
          selectPlayer={selectPlayer}
          updateScore={updateScore}
        />
      )}
    </div>
  );
};

export default App;
