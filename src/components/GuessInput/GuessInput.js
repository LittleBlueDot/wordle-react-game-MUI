import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function GuessInput({ gameStatus, handleAddWord }) {
  const [word, setWord] = React.useState('');
  const [error, setError] = React.useState(false);

  function handleChange(event) {
    const newWord = event.target.value.toUpperCase();
    setWord(newWord);
    setError(!/^[A-Za-z]{5}$/.test(newWord));
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!error && /^[A-Za-z]{5}$/.test(word)) {
      handleAddWord(word);
      setWord('');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="guess-input">
        <Typography sx={{ typography: 'h6' }}>Enter guess:</Typography>
      </label>
      <TextField
        required
        disabled={gameStatus !== 'running'}
        id="guess-input"
        variant="outlined"
        fullWidth
        type="text"
        value={word}
        onChange={handleChange}
        error={error}
        helperText={error ? 'Word must be exactly 5 letters' : ''}
      />
    </form>
  );
}

export default GuessInput;
