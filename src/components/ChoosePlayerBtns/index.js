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
  let btnsComponent = [];

  for (let i = 2; i <= 6; i++) {
    btnsComponent.push(
      <button
        key={i}
        className={numberOfPlayers === i ? 'active' : ''}
        onClick={() => changeNumberOfPlayers(i)}
      >
        {i}
      </button>
    );
  }

  return <ChoosePlayerBtnsStyled>{btnsComponent}</ChoosePlayerBtnsStyled>;
};

ChoosePlayerBtns.propTypes = {
  numberOfPlayers: PropTypes.number,
  changeNumberOfPlayers: PropTypes.func,
};

export default ChoosePlayerBtns;
