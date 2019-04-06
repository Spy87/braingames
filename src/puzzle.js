import { random } from 'lodash';

export const getPuzzle = (minNum, maxNum) => {
  const result = {};
  const num = random(minNum, maxNum);

  if (num % 2 === 0) {
    result.solution = 'yes';
  } else {
    result.solution = 'no';
  }
  result.question = `${num}`;

  return result;
};

export default getPuzzle;
