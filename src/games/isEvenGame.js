import readlineSync from 'readline-sync';

import isEvenNumber from '../helpers/isEvenNumber.js';
import getRandomNumber from '../helpers/getRandomNumber.js';
import gameLogic from '../index.js';

const isEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const number = getRandomNumber(1, 100);

  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEvenNumber(+number) ? 'yes' : 'no';

  return [userAnswer, correctAnswer];
};

export default () => gameLogic(isEvenGame);
