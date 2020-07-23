import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';



const ConfirmBtns = ({ newGame, resetGame, wantsNewGame, closeConfirm }) => {
  const handleClick = () => {
    wantsNewGame ? newGame() : resetGame();
    closeConfirm();
  };

  return (
    <>
      <p>Are you sure?</p>
      <button onClick={handleClick}>Yes</button>
      <button onClick={closeConfirm}>No</button>
    </>
  );
};

ConfirmBtns.propTypes = {
  newGame: PropTypes.func,
  resetGame: PropTypes.func,
  wantsNewGame: PropTypes.bool,
  closeConfirm: PropTypes.func,
};

export default ConfirmBtns;
