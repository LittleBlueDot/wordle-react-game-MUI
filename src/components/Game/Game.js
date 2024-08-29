import React from 'react';

import { Box } from '@mui/material';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [wordList, setWordList] = React.useState([]);

  function handleAddWord(tentativeGuess) {
    const newGuess = {
      value: tentativeGuess,
      id: crypto.randomUUID(),
    };
    const nextGuesses = [...wordList, newGuess];
    setWordList(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }
  return (
    <>
      <GuessResults wordList={wordList} answer={answer} />
      <Box sx={{ mt: 2 }}>
        <GuessInput handleAddWord={handleAddWord} gameStatus={gameStatus} />
      </Box>
      {gameStatus === 'won' && <WonBanner numOfGuesses={wordList.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
