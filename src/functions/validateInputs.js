const validateInputs = (numberOfPlayers, players) => {
  const inputValues = [];
  for (let i = 0; i < numberOfPlayers; i++) {
    const player = players[i];
    inputValues.push(player.username);
  }
  const isValid = inputValues.every((input) => input !== '');
  if (isValid) {
    return true;
  }
};

export default validateInputs;