const validateForm = (players, numberOfPlayers) => {
  const formValues = Object.values(players);
  const hasFilledInForm = formValues.length === numberOfPlayers;
  const isEmpty = formValues.every((value) => value === '');
  if (hasFilledInForm && !isEmpty) {
    return true;
  } 
};

export default validateForm;
