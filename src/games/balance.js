import { random } from 'lodash';
import { run } from '../game-engine';

const minNum = 0;
const maxNum = 10000;
const description = 'Balance the given number.';

const sumDigits = (num) => {
  let amount = num;
  let result = 0;
  while (amount > 0) {
    result += amount % 10;
    amount = Math.floor(amount / 10);
  }
  return result;
};

const getPuzzle = () => {
  const result = {};
  const num = random(minNum, maxNum);
  const sum = sumDigits(num);
  const amountDigits = num.toString().length;
  const remainder = sum % amountDigits;
  const trunc = Math.trunc(sum / amountDigits);

  let balanceNum = '';
  let i = 0;

  while (i < amountDigits - remainder) {
    balanceNum += trunc;
    i += 1;
  }

  i = 0;

  while (i < remainder) {
    balanceNum += trunc + 1;
    i += 1;
  }

  result.question = `${num}`;
  result.solution = balanceNum;

  return result;
};

export default () => run(description, getPuzzle);
