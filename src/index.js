import greeting from './cli.js';

const ROUND_COUNT = 3;

const gameLogic = (cb) => {
  const name = greeting();

  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const [userAnswer, correctAnswer] = cb();

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default gameLogic;
