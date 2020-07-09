import React, { useState } from 'react';

const Game = ({ players }) => {
  const playersArray = Object.values(players).filter(
    (players) => players.username !== ''
  );
  const [scores, setScores] = useState(playersArray);
  const [activePlayer, setActivePlayer] = useState('');
  const handleClick = (e) => {
    setActivePlayer(
      scores.find((item) => item.username === e.currentTarget.dataset.id)
    );
  };

  console.log(activePlayer);

  const playersCompenent = scores.map((player) => (
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
