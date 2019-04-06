import { random } from 'lodash';
import { run } from '../game-engine';

const minNum = 0;
const maxNum = 10;
const description = 'What is the result of the expression?';

const getOperation = () => {
  const operation = ['+', '-', '*'];
  const numOperation = random(1, operation.length) - 1;

  return operation[numOperation];
};

const getPuzzle = () => {
  const num1 = random(minNum, maxNum);
  const num2 = random(minNum, maxNum);
  const operation = getOperation();
  const result = {};

  result.question = `${num1} ${operation} ${num2}`;

  if (operation === '+') {
    result.solution = String(num1 + num2);
  } else if (operation === '-') {
    result.solution = String(num1 - num2);
  } else {
    result.solution = String(num1 * num2);
  }

  return result;
};

export default () => run(description, getPuzzle);
