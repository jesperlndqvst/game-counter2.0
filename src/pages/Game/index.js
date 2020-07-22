import React from 'react';
import PropTypes from 'prop-types';
import './game.css';

const Game = ({ players, selectPlayer, updateScore, newGame, resetGame }) => {
  const playersCompenent = players.map((player) => (
    <div
      className={player.active ? 'active' : ''}
      data-id={player.id}
      onClick={selectPlayer}
      key={player.id}
    >
      <p>{player.username}</p>
      <p>{player.score}</p>
    </div>
  ));

  return (
    <div>
      <div>
        <button onClick={newGame}>New Game</button>
        <button onClick={resetGame}>Reset</button>
      </div>
      {playersCompenent}
      <button onClick={() => updateScore(-5)}>-5</button>
      <button onClick={() => updateScore(-1)}>-1</button>
      <button onClick={() => updateScore(1)}>+1</button>
      <button onClick={() => updateScore(5)}>+5</button>
    </div>
  );
};

Game.propTypes = {
  players: PropTypes.array,
  selectPlayer: PropTypes.func,
  updateScore: PropTypes.func,
  newGame: PropTypes.func,
  resetGame: PropTypes.func,
};

export default Game;
