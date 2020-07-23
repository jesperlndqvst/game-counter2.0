import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GameStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;

  .game-btns {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px 15px 0 15px;

    button {
      background-color: var(--grey-color);
      font-size: 16px;
      width: 150px;
    }
  }

  .player {
    display: flex;
    justify-content: space-between;
    font-size: 52px;
    > p {
      padding: 5px 15px;
    }
  }
  .active {
    background-color: var(--orange-color);
    color: #fff;
  }

  .score-btns {
    display: flex;
    margin: 0 15px;
    justify-content: space-between;
    button {
      font-size: 24px;
      width: 75px;
    }
  }
`;

const Game = ({ players, selectPlayer, updateScore, newGame, resetGame }) => {
  const playersCompenent = players.map((player) => (
    <div
      className={`player ${player.active ? 'active' : ''}`}
      data-id={player.id}
      onClick={selectPlayer}
      key={player.id}
    >
      <p>{player.username}</p>
      <p>{player.score}</p>
    </div>
  ));

  return (
    <GameStyled>
      <div className='game-btns'>
        <button onClick={newGame}>New Game</button>
        <button onClick={resetGame}>Reset</button>
      </div>
      <div>{playersCompenent}</div>
      <div className='score-btns'>
        <button onClick={() => updateScore(-5)}>-5</button>
        <button onClick={() => updateScore(-1)}>-1</button>
        <button onClick={() => updateScore(1)}>+1</button>
        <button onClick={() => updateScore(5)}>+5</button>
      </div>
    </GameStyled>
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
