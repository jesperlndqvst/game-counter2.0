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
      <button onClick={updateScore}>Click</button>
    </div>
  );
};

export default Game;
