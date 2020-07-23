import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GameBtnsStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 15px 0 15px;

  button {
    background-color: var(--grey-color);
    font-size: 16px;
    width: 150px;
  }
`;

const GameBtns = ({ newGame, resetGame }) => {
  return (
    <GameBtnsStyled>
      <button onClick={newGame}>New Game</button>
      <button onClick={resetGame}>Reset</button>
    </GameBtnsStyled>
  );
};

GameBtns.propTypes = {
  newGame: PropTypes.func,
  resetGame: PropTypes.func,
};

export default GameBtns;
