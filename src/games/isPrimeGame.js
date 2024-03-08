import readlineSync from 'readline-sync';

import { isPrimeNumber } from '../helpers/isPrimeNumber.js';
import { getRandomNumber } from '../helpers/getRandomNumber.js';

export const isPrimeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const number = getRandomNumber(1, 100);

  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';

  return [userAnswer, correctAnswer];
};
