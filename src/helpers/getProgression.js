import { getRandomNumber } from "./getRandomNumber.js";

export const getProgression = () => {
  const PROGRESSION_LENGTH = 10;

  const firstProgressionNumber = getRandomNumber(1, 10);
  const progressionStep = getRandomNumber(1, 10);

  const emptyElementIndex = getRandomNumber(1, 10);
  let emptyElement = 0;

  let progression = [firstProgressionNumber];

  for (let i = 1; i < PROGRESSION_LENGTH; i += 1) {
    if (i === emptyElementIndex) {
      emptyElement = progression[i - 1] + progressionStep;
    }

    progression.push(progression[i - 1] + progressionStep);
  }

  progression[emptyElementIndex] = "..";

  return [emptyElement, progression.join(" ")];
};
