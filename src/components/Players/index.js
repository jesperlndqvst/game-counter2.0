import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlayersStyled = styled.div`
  .player {
    display: flex;
    justify-content: space-between;
    font-size: 42px;
    > p {
      padding: 5px 15px;
    }
  }
  .active {
    background-color: var(--orange-color);
    color: #fff;
  }
`;

const Players = ({ players, selectPlayer }) => {
  const playersComponent = players.map((player) => (
    <div
      className={`player ${player.active ? 'active' : ''}`}
      data-id={player.id}
      onClick={selectPlayer}
      key={player.id}
    >
      <p>{player.username}</p>
      <p>{player.score}</p>
    </div>
  ));

  return <PlayersStyled>{playersComponent}</PlayersStyled>;
};

Players.propTypes = {
  players: PropTypes.array,
  selectPlayer: PropTypes.func,
};

export default Players;
