import readlineSync from 'readline-sync';

import getRandomNumber from '../helpers/getRandomNumber.js';
import gameLogic from '../index.js';

const MATH_OPERATIONS = ['+', '-', '*'];

const calcGame = () => {
  console.log('What is the result of the expression?');

  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);

  const randomOperation = MATH_OPERATIONS[Math.floor(Math.random() * MATH_OPERATIONS.length)];

  console.log(`Question: ${firstNumber} ${randomOperation} ${secondNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  let correctAnswer = 0;

  switch (randomOperation) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;

    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;

    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;

    default:
      break;
  }

  return [+userAnswer, +correctAnswer];
};

export default () => gameLogic(calcGame);
