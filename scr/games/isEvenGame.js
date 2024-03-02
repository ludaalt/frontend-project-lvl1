import readlineSync from "readline-sync";

import { isEvenNumber } from "../helpers/isEvenNumber.js";
import { getRandomNumber } from "../helpers/getRandomNumber.js";
import "../cli.js";
import { name } from "../cli.js";

export const isEvenGame = () => {
  const ROUND_COUNT = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const number = getRandomNumber(1, 100);

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question("Your answer: ");
    const correctAnswer = isEvenNumber(+number) ? "yes" : "no";

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    } else console.log("Correct!");
  }

  console.log(`Congratulations, ${name}!`);
};
