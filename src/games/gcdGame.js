import readlineSync from "readline-sync";

import { getRandomNumber } from "../helpers/getRandomNumber.js";
import { gcd } from "../helpers/gcd.js";

export const gcdGame = () => {
  console.log("Find the greatest common divisor of given numbers.");

  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);

  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const userAnswer = readlineSync.question("Your answer: ");

  const correctAnswer = gcd(firstNumber, secondNumber);

  return [+userAnswer, +correctAnswer];
};
