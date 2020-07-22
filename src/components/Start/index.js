import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import validateInputs from '../../functions/validateInputs';
import styled from 'styled-components';

const StartStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;
  height: 100vh;

  h2 {
    font-size: 42px;
    color: var(--black-color);
    margin: 30px 0;
  }

  .buttons-container {
    display: flex;
    justify-content: space-around;

    button {
      font-size: 24px;
      min-width: 60px;
      background-color: var(--grey-color);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    .inputs-container {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      width: 100%;

      input {
        padding: 6px;
        margin: 6px 0;
        font-size: 36px;
        border: 1px solid var(--black-color);
        border-radius: 12px;
      }
    }
    button {
      margin-top: 10px;
      width: 200px;
      background-color: var(--orange-color);
      font-size: 36px;
      color: #fff;
    }
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
      <div className='buttons-container'>
        <button onClick={() => setNumberOfPlayers(2)}>2</button>
        <button onClick={() => setNumberOfPlayers(3)}>3</button>
        <button onClick={() => setNumberOfPlayers(4)}>4</button>
        <button onClick={() => setNumberOfPlayers(5)}>5</button>
        <button onClick={() => setNumberOfPlayers(6)}>6</button>
      </div>
      <form>
        <div className='inputs-container'>{inputsComponent}</div>
        {validateInputs(numberOfPlayers, players) && (
          <button onClick={startGame}>
            Start
          </button>
        )}
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
