import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RestartBtnsStyled = styled.div`
  button {
    width: 150px;
  }
`;

const RestartBtns = ({ handleClick }) => {
  return (
    <RestartBtnsStyled>
      <button onClick={() => handleClick('newGame')}>New Game</button>
      <button onClick={handleClick}>Reset</button>
    </RestartBtnsStyled>
  );
};

RestartBtns.propTypes = {
  newGame: PropTypes.func,
  resetGame: PropTypes.func,
};

export default RestartBtns;
