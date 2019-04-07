import { random } from 'lodash';
import { run } from '../game-engine';

const minNum = 0;
const maxNum = 100;
const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let result = 1;

  const absNum1 = Math.abs(num1);
  const absNum2 = Math.abs(num2);

  const minAmount = Math.min(absNum1, absNum2);
  const maxAmount = Math.max(absNum1, absNum2);

  if (minAmount === 0) {
    result = maxAmount;
  } else if (maxAmount % minAmount === 0) {
    result = minAmount;
  } else {
    result = getGCD(minAmount, maxAmount % minAmount);
  }

  return result;
};

const getPuzzle = () => {
  const result = {};
  const num1 = random(minNum, maxNum);
  const num2 = random(minNum, maxNum);

  result.question = `${num1} ${num2}`;
  result.solution = String(getGCD(num1, num2));

  return result;
};

export default () => run(description, getPuzzle);
