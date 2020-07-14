import React, { useState } from 'react';
import './App.css';

// Pages

import Start from './pages/Start';
import Game from './pages/Game';
import NotFound from './pages/NotFound';

import playersData from "./playersData"

const App = () => {
  const [players, setPlayers] = useState(playersData);
  const [gameIsStarted, setGameIsStarted] = useState(false);

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
    setPlayers(players.filter((players) => players.username !== ''));
    setGameIsStarted(true);
  };

  const selectPlayer = (e) => {
    const playerId = parseInt(e.currentTarget.dataset.id);
    let newArray = [...players];
    newArray.forEach((player) => (player.active = false));
    newArray[playerId - 1].active = true;
    setPlayers(newArray);
  };

  const updateScore = (value) => {
    const playerId = players.find((player) => player.active === true).id;
    let newArray = [...players];
    newArray[playerId - 1].score += value;
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
