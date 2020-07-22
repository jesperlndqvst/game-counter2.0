import React, { useState } from 'react';
import './App.css';
import Start from './components/Start';
import Game from './components/Game';

import playersData from './playersData';

const App = () => {
  const prevPlayers = JSON.parse(localStorage.getItem('prevPlayers'));
  const [players, setPlayers] = useState(prevPlayers || playersData);
  const [gameIsStarted, setGameIsStarted] = useState(
    prevPlayers ? true : false
  );

  const updateUsername = (e) => {
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
    localStorage.setItem('prevPlayers', JSON.stringify(newArray));
  };

  const newGame = () => {
    setGameIsStarted(false);
    let newArray = [...playersData];
    for (let i = 0; i < newArray.length; i++) {
      const player = newArray[i];
      player.id = i + 1;
      player.username = '';
      player.score = 0;
      player.active = false;
    }
    newArray[0].active = true;
    setPlayers(newArray);
  };

  const resetGame = () => {
    let newArray = [...players];
    newArray.forEach((player) => {
      player.score = 0;
      player.active = false;
    });
    newArray[0].active = true;
    setPlayers(newArray);
  };

  return (
    <div className='App'>
      {!gameIsStarted ? (
        <Start
          players={players}
          updateUsername={updateUsername}
          startGame={startGame}
        />
      ) : (
        <Game
          players={players}
          selectPlayer={selectPlayer}
          updateScore={updateScore}
          newGame={newGame}
          resetGame={resetGame}
        />
      )}
    </div>
  );
};

export default App;
