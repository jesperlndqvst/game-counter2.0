import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChoosePlayerBtnsStyled = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    font-size: 24px;
    min-width: 60px;
    background-color: var(--grey-color);
  }
  .active {
    background: var(--orange-color);
    color: #fff;
  }
`;

const ChoosePlayerBtns = ({ numberOfPlayers, changeNumberOfPlayers }) => {
  return (
    <ChoosePlayerBtnsStyled>
      <button
        className={numberOfPlayers === 2 ? 'active' : ''}
        onClick={() => changeNumberOfPlayers(2)}
      >
        2
      </button>
      <button
        className={numberOfPlayers === 3 ? 'active' : ''}
        onClick={() => changeNumberOfPlayers(3)}
      >
        3
      </button>
      <button
        className={numberOfPlayers === 4 ? 'active' : ''}
        onClick={() => changeNumberOfPlayers(4)}
      >
        4
      </button>
      <button
        className={numberOfPlayers === 5 ? 'active' : ''}
        onClick={() => changeNumberOfPlayers(5)}
      >
        5
      </button>
      <button
        className={numberOfPlayers === 6 ? 'active' : ''}
        onClick={() => changeNumberOfPlayers(6)}
      >
        6
      </button>
    </ChoosePlayerBtnsStyled>
  );
};

ChoosePlayerBtns.propTypes = {
  numberOfPlayers: PropTypes.number,
  changeNumberOfPlayers: PropTypes.func,
};

export default ChoosePlayerBtns;
