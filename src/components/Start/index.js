import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import validateInputs from '../../functions/validateInputs';
import styled from 'styled-components';

const StartStyled = styled.div`
  h2 {
    font-size: 24px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`;

const Start = ({ players, updateUsername, startGame }) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
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
    <StartStyled>
      <h2>Choose Players</h2>
      <button onClick={() => setNumberOfPlayers(2)}>2</button>
      <button onClick={() => setNumberOfPlayers(3)}>3</button>
      <button onClick={() => setNumberOfPlayers(4)}>4</button>
      <button onClick={() => setNumberOfPlayers(5)}>5</button>
      <button onClick={() => setNumberOfPlayers(6)}>6</button>
      <form>
        {inputsComponent}
        {validateInputs(numberOfPlayers, players) ? (
          <button onClick={startGame}>Start</button>
        ) : null}
      </form>
    </StartStyled>
  );
};

Start.propTypes = {
  players: PropTypes.array,
  updateUsername: PropTypes.func,
  startGame: PropTypes.func,
};

export default Start;
