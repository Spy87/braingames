import { random } from 'lodash';
import { run } from '../game-engine';

const minNum = 0;
const maxNum = 100;
const description = 'Answer "yes" if number even otherwise answer "no"';

const getPuzzle = () => {
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

export default () => run(description, getPuzzle);
