import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateInputs from '../../functions/validateInputs';

const ChoosePlayerFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 77vh;

  div {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    width: 100%;

    input {
      padding: 6px;
      margin: 2px 0;
      font-size: 36px;
      border: none;
      background-color: var(--white-color);
    }
  }
  button {
    width: 200px;
    display: block;
    background-color: var(--orange-color);
    font-size: 30px;
    color: #fff;
  }
`;

const ChoosePlayerForm = ({
  numberOfPlayers,
  players,
  updateUsername,
  startGame,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [numberOfPlayers]);

  let inputsComponent = [];

  for (let i = 0; i < numberOfPlayers; i++) {
    const player = players[i];
    inputsComponent.push(
      <input
        ref={i === 0 ? inputRef : null}
        key={player.id}
        id={player.id}
        placeholder={`Player ${player.id}`}
        value={player.username}
        onChange={updateUsername}
        autoComplete='off'
      />
    );
  }

  return (
    <ChoosePlayerFormStyled>
      <div>{inputsComponent}</div>
      {validateInputs(numberOfPlayers, players) && (
        <button onClick={startGame}>Start</button>
      )}
    </ChoosePlayerFormStyled>
  );
};

ChoosePlayerForm.propTypes = {
  numberOfPlayers: PropTypes.number,
  players: PropTypes.array,
  updateUsername: PropTypes.func,
  startGame: PropTypes.func,
};

export default ChoosePlayerForm;
