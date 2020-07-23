import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ScoreBtnsStyled = styled.div`
  display: flex;
  margin: 0 15px;
  justify-content: space-between;
  button {
    font-size: 24px;
    width: 75px;
  }
`;

const ScoreBtns = ({ updateScore }) => {
  return (
    <ScoreBtnsStyled>
      <button onClick={() => updateScore(-5)}>-5</button>
      <button onClick={() => updateScore(-1)}>-1</button>
      <button onClick={() => updateScore(1)}>+1</button>
      <button onClick={() => updateScore(5)}>+5</button>
    </ScoreBtnsStyled>
  );
};

ScoreBtns.propTypes = {
  updateScore: PropTypes.func,
};

export default ScoreBtns;