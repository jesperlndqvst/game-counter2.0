import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ConfirmBtnsStyled = styled.div`
  button {
    width: 105px;
  }
  @media (prefers-color-scheme: dark) {
    p {
      color: var(--white-color)
    }
  }
`;

const ConfirmBtns = ({ newGame, resetGame, endType, closeConfirm }) => {
  const handleClick = () => {
    endType === 'newGame' ? newGame() : resetGame();
    closeConfirm();
  };

  return (
    <ConfirmBtnsStyled>
      <p>Are you sure?</p>
      <button onClick={handleClick}>Yes</button>
      <button onClick={closeConfirm}>No</button>
    </ConfirmBtnsStyled>
  );
};

ConfirmBtns.propTypes = {
  newGame: PropTypes.func,
  resetGame: PropTypes.func,
  wantsNewGame: PropTypes.bool,
  closeConfirm: PropTypes.func,
};

export default ConfirmBtns;
