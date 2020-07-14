import React from 'react';
import './game.css';

const Game = ({ players, selectPlayer, updateScore }) => {
  const playersCompenent = players.map((player) => (
    <div
      className={player.active ? 'active' : ''}
      data-id={player.id}
      onClick={selectPlayer}
      key={player.username}
    >
      <p>{player.username}</p>
      <p>{player.score}</p>
    </div>
  ));

  return (
    <div>
      {playersCompenent}
      <button onClick={() => updateScore(-5)}>-5</button>
      <button onClick={() => updateScore(-1)}>-1</button>
      <button onClick={() => updateScore(1)}>+1</button>
      <button onClick={() => updateScore(5)}>+5</button>
    </div>
  );
};

export default Game;
