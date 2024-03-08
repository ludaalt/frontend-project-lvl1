import readlineSync from 'readline-sync';

import { getProgression } from '../helpers/getProgression.js';

export const progression = () => {
  console.log('What number is missing in the progression?');

  const [emptyElement, progression] = getProgression();

  console.log(`Question: ${progression}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const correctAnswer = emptyElement;

  return [+userAnswer, +correctAnswer];
};
