import React, { useState } from 'react';
import './start.css';

const Start = () => {
  const [name, setName] = useState({
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    player5: '',
    player6: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setName({
      ...name,
      [e.target.id]: value,
    });
  };

  const startGame = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <h2>Choose Players</h2>
      <form>
        <input
          type='text'
          id='player1'
          placeholder='Player 1'
          value={name.player1}
          onChange={handleChange}
          autoComplete='off'
        />
        <input
          type='text'
          id='player2'
          placeholder='Player 2'
          value={name.player2}
          onChange={handleChange}
          autoComplete='off'
        />
        <input
          type='text'
          id='player3'
          placeholder='Player 3'
          value={name.player3}
          onChange={handleChange}
          autoComplete='off'
        />
        <input
          type='text'
          id='player4'
          placeholder='Player 4'
          value={name.player4}
          onChange={handleChange}
          autoComplete='off'
        />
        <input
          type='text'
          id='player5'
          placeholder='Player 5'
          value={name.player5}
          onChange={handleChange}
          autoComplete='off'
        />
        <input
          type='text'
          id='player6'
          placeholder='Player 6'
          value={name.player6}
          onChange={handleChange}
          autoComplete='off'
        />
        <button onClick={startGame}>Start Game</button>
      </form>
    </div>
  );
};

export default Start;
