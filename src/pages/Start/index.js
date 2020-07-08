import React, { useState } from 'react';
import './start.css';
import validateForm from '../../functions/validateForm';

const Start = ({ players, updatePlayer, startGame }) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const isValidForm = validateForm(players, numberOfPlayers);

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
          id='player1'
          placeholder='Player 1'
          value={players.player1 || ''}
          onChange={updatePlayer}
          autoComplete='off'
        />
        <input
          type='text'
          id='player2'
          placeholder='Player 2'
          value={players.player2 || ''}
          onChange={updatePlayer}
          autoComplete='off'
        />
        {numberOfPlayers > 2 && (
          <input
            type='text'
            id='player3'
            placeholder='Player 3'
            value={players.player3 || ''}
            onChange={updatePlayer}
            autoComplete='off'
          />
        )}

        {numberOfPlayers > 3 && (
          <input
            type='text'
            id='player4'
            placeholder='Player 4'
            value={players.player4 || ''}
            onChange={updatePlayer}
            autoComplete='off'
          />
        )}
        {numberOfPlayers > 4 && (
          <input
            type='text'
            id='player5'
            placeholder='Player 5'
            value={players.player5 || ''}
            onChange={updatePlayer}
            autoComplete='off'
          />
        )}
        {numberOfPlayers > 5 && (
          <input
            type='text'
            id='player6'
            placeholder='Player 6'
            value={players.player6 || ''}
            onChange={updatePlayer}
            autoComplete='off'
          />
        )}
        {isValidForm && <button onClick={startGame}>Start</button>}
      </form>
    </div>
  );
};

export default Start;
