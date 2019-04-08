import { random } from 'lodash';
import { run } from '../game-engine';

const minNum = 0;
const maxNum = 100;
const description = 'Is this number prime?';

const isPrime = (num) => {
  let result = true;

  if ((num % 2 === 0) && (num !== 2)) {
    result = false;
  } else if (num === 2) {
    result = true;
  } else {
    const j = Math.round(Math.sqrt(num));

    let i = 3;
    while (i < j + 1) {
      if (num % i === 0) {
        result = false;
        break;
      }
      i += 1;
    }
  }

  return result;
};

const getPuzzle = () => {
  const result = {};
  const num = random(minNum, maxNum);

  if (isPrime(num)) {
    result.solution = 'yes';
  } else {
    result.solution = 'no';
  }
  result.question = `${num}`;

  return result;
};

export default () => run(description, getPuzzle);
