import React, { useState } from 'react';
import './start.css';

const Start = ({ players, updatePlayer, startGame }) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);


  // let playersComponent = [];

  // for (let i = 0; i < numberOfPlayers; i++) {
  //   playersComponent.push(
  //     <input
  //       key={Object.keys(players)[numberOfPlayers[i]]}
  //       placeholder={`Player ${numberOfPlayers[i]}`}
  //       value={players[numberOfPlayers].username || ""}
  //       onChange={updatePlayer}
  //       autoComplete='off'
  //     />
  //   );
  // }

  return (
    <div>
      <h2>Choose Players</h2>
      <button onClick={() => setNumberOfPlayers(2)}>2</button>
      <button onClick={() => setNumberOfPlayers(3)}>3</button>
      <button onClick={() => setNumberOfPlayers(4)}>4</button>
      <button onClick={() => setNumberOfPlayers(5)}>5</button>
      <button onClick={() => setNumberOfPlayers(6)}>6</button>
      <form>
        <input
          type='text'
          id='1'
          placeholder='Player 1'
          value={players[0].username || ''}
          onChange={updatePlayer}
          autoComplete='off'
        />
        <input
          type='text'
          id='2'
          placeholder='Player 2'
          value={players[1].username || ''}
          onChange={updatePlayer}
          autoComplete='off'
        />
        {numberOfPlayers > 2 && (
          <input
            type='text'
            id='3'
            placeholder='Player 3'
            value={players[2].username || ''}
            onChange={updatePlayer}
            autoComplete='off'
          />
        )}

        {numberOfPlayers > 3 && (
          <input
            type='text'
            id='4'
            placeholder='Player 4'
            value={players[3].username || ''}
            onChange={updatePlayer}
            autoComplete='off'
          />
        )}
        {numberOfPlayers > 4 && (
          <input
            type='text'
            id='5'
            placeholder='Player 5'
            value={players[4].username || ''}
            onChange={updatePlayer}
            autoComplete='off'
          />
        )}
        {numberOfPlayers > 5 && (
          <input
            type='text'
            id='6'
            placeholder='Player 6'
            value={players[5].username || ''}
            onChange={updatePlayer}
            autoComplete='off'
          />
        )}
        <button onClick={startGame}>Start</button>
      </form>
    </div>
  );
};

export default Start;
