import React, { useState } from 'react';

const Game = ({ players }) => {
  const playersArray = players.filter((players) => players.username !== '');
  const [activePlayer, setActivePlayer] = useState('');
  const handleClick = (e) => {
    setActivePlayer(
      playersArray.find((item) => item.username === e.currentTarget.dataset.id)
    );
  };

  console.log(activePlayer);

  const playersCompenent = playersArray.map((player) => (
    <div data-id={player.username} onClick={handleClick} key={player.username}>
      <p>{player.username}</p>
      <p>{player.score}</p>
    </div>
  ));

  return (
    <div>
      {playersCompenent}
      <button>Click</button>
    </div>
  );
};

export default Game;
