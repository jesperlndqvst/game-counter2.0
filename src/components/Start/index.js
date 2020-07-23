import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import validateInputs from '../../functions/validateInputs';
import styled from 'styled-components';

const StartStyled = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 42px;
    color: var(--black-color);
    margin-bottom: 15px;
  }

  .buttons-container {
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
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 75vh;

    .inputs-container {
      display: flex;
      flex-direction: column;
      margin-top: 15px;
      width: 100%;

      input {
        padding: 6px;
        margin: 6px 0;
        font-size: 36px;
        border: none;
      }
    }
    button {
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
        <button
          className={numberOfPlayers === 2 ? 'active' : ''}
          onClick={() => setNumberOfPlayers(2)}
        >
          2
        </button>
        <button
          className={numberOfPlayers === 3 ? 'active' : ''}
          onClick={() => setNumberOfPlayers(3)}
        >
          3
        </button>
        <button
          className={numberOfPlayers === 4 ? 'active' : ''}
          onClick={() => setNumberOfPlayers(4)}
        >
          4
        </button>
        <button
          className={numberOfPlayers === 5 ? 'active' : ''}
          onClick={() => setNumberOfPlayers(5)}
        >
          5
        </button>
        <button
          className={numberOfPlayers === 6 ? 'active' : ''}
          onClick={() => setNumberOfPlayers(6)}
        >
          6
        </button>
      </div>
      <form>
        <div className='inputs-container'>{inputsComponent}</div>
        {validateInputs(numberOfPlayers, players) && (
          <button onClick={startGame}>Start</button>
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
