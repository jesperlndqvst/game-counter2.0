import React from 'react';

const Game = ({ players, selectPlayer, updateScore }) => {
  const playersCompenent = players.map((player) => (
    <div data-id={player.username} onClick={selectPlayer} key={player.username}>
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
