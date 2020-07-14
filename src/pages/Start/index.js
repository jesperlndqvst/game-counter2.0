import React, { useState } from 'react';
import './start.css';

const Start = ({ players, updatePlayer, startGame }) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);

  let playersComponent = [];

  for (let i = 0; i < numberOfPlayers; i++) {
    const player = players[i];
    playersComponent.push(
      <input
        key={player.id}
        id={player.id}
        placeholder={`Player ${player.id}`}
        value={player.username}
        onChange={updatePlayer}
        autoComplete='off'
      />
    );
  }

  return (
    <div>
      <h2>Choose Players</h2>
      <button onClick={() => setNumberOfPlayers(2)}>2</button>
      <button onClick={() => setNumberOfPlayers(3)}>3</button>
      <button onClick={() => setNumberOfPlayers(4)}>4</button>
      <button onClick={() => setNumberOfPlayers(5)}>5</button>
      <button onClick={() => setNumberOfPlayers(6)}>6</button>
      <form>
        {playersComponent}
        <button onClick={startGame}>Start</button>
      </form>
    </div>
  );
};

export default Start;
