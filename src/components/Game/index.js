import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Players from "../Players"

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
  return (
    <GameStyled>
      <div className='game-btns'>
        <button onClick={newGame}>New Game</button>
        <button onClick={resetGame}>Reset</button>
      </div>
      <Players players={players} selectPlayer={selectPlayer} />
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
