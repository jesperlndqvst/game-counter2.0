import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChoosePlayerBtns from '../../components/ChoosePlayerBtns';
import ChoosePlayerForm from '../../components/ChoosePlayerForm';

const StartStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  h2 {
    font-size: 42px;
    color: var(--black-color);
    margin-bottom: 15px;
  }
`;

const Start = ({ players, updateUsername, startGame }) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);

  const changeNumberOfPlayers = (number) => setNumberOfPlayers(number);

  return (
    <StartStyled>
      <h2>Choose Players</h2>
      <ChoosePlayerBtns
        numberOfPlayers={numberOfPlayers}
        changeNumberOfPlayers={changeNumberOfPlayers}
      />
      <ChoosePlayerForm
        numberOfPlayers={numberOfPlayers}
        players={players}
        updateUsername={updateUsername}
        startGame={startGame}
      />
    </StartStyled>
  );
};

Start.propTypes = {
  players: PropTypes.array,
  updateUsername: PropTypes.func,
  startGame: PropTypes.func,
};

export default Start;
