import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RestartBtns from '../RestartBtns';
import ConfirmBtns from '../ConfirmBtns';

const GameBtnsStyled = styled.div`
  div {
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px 0 15px;
  }

  button {
    background-color: var(--grey-color);
    font-size: 16px;
  }
`;

const GameBtns = ({ newGame, resetGame }) => {
  const [wantsEndGame, setWantsEndGame] = useState(false);
  const [endType, setEndType] = useState('');

  const handleClick = (type) => {
    setWantsEndGame(true);
    setEndType(type);
  };

  const closeConfirm = () => setWantsEndGame(false);

  return (
    <GameBtnsStyled>
      {!wantsEndGame ? (
        <RestartBtns handleClick={handleClick} />
      ) : (
        <ConfirmBtns
          newGame={newGame}
          resetGame={resetGame}
          endType={endType}
          closeConfirm={closeConfirm}
        />
      )}
    </GameBtnsStyled>
  );
};

GameBtns.propTypes = {
  newGame: PropTypes.func,
  resetGame: PropTypes.func,
};

export default GameBtns;
