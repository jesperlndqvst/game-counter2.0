import React from 'react';
import styled from "styled-components"
import PropTypes from 'prop-types';


const RestartBtns = ({ handleClick }) => {
  return (
      <>
      <button onClick={() => handleClick('newGame')}>New Game</button>
      <button onClick={handleClick}>Reset</button>
      </>
  );
};

RestartBtns.propTypes = {
  newGame: PropTypes.func,
  resetGame: PropTypes.func,
};

export default RestartBtns;
