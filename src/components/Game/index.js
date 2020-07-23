import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Players from '../Players';
import ScoreBtns from '../ScoreBtns';
import GameBtns from '../GameBtns';

const GameStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
`;

const Game = ({ players, selectPlayer, updateScore, newGame, resetGame }) => {
  return (
    <GameStyled>
      <GameBtns newGame={newGame} resetGame={resetGame} />
      <Players players={players} selectPlayer={selectPlayer} />
      <ScoreBtns updateScore={updateScore} />
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
