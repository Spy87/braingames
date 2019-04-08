import { random } from 'lodash';
import { run } from '../game-engine';

const lengthProgression = 10;
const misElement = '..';
const separator = ' ';
const description = 'What number is missing in this progression?';

const getElementProg = (num, startNum, stepProgression) => startNum + (num - 1) * stepProgression;

const getProgression = (startNum, stepProgression, misNumber) => {
  let result = '';
  if (misNumber > lengthProgression) {
    return result;
  }

  let i = 1;

  while (i <= lengthProgression) {
    if (i === misNumber) {
      result += `${misElement}${separator}`;
    } else {
      result += `${getElementProg(i, startNum, stepProgression)}${separator}`;
    }

    i += 1;
  }

  return result.slice(0, -separator.length);
};

const getPuzzle = () => {
  const result = {};
  const startNum = random(1, 100);
  const stepProgression = random(1, 10);
  const misNumber = random(1, lengthProgression);

  result.question = getProgression(startNum, stepProgression, misNumber);
  result.solution = getElementProg(misNumber, startNum, stepProgression).toString();

  return result;
};

export default () => run(description, getPuzzle);
