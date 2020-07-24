import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Players from '../../components/Players';
import ScoreBtns from '../../components/ScoreBtns';
import GameBtns from '../../components/GameBtns';

const GameStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
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
