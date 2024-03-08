import readlineSync from 'readline-sync';

import getProgression from '../helpers/getProgression.js';
import gameLogic from '../index.js';

const progressionGame = () => {
  console.log('What number is missing in the progression?');

  const [emptyElement, progression] = getProgression();

  console.log(`Question: ${progression}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const correctAnswer = emptyElement;

  return [+userAnswer, +correctAnswer];
};

export default () => gameLogic(progressionGame);
