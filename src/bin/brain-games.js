#! /usr/bin/node

import readlineSync from 'readline-sync';
import getPuzzle from '../puzzle';

const roundsCount = 3;
const minNum = 0;
const maxNum = 100;

const playRound = (count = 0) => {
  if (count === roundsCount) {
    return true;
  }
  const puzzle = getPuzzle(minNum, maxNum);
  console.log(`Question: ${puzzle.question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === puzzle.solution) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${puzzle.solution}'.`);
    return false;
  }
  return playRound(count + 1);
};


console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"');

console.log('');

const user = readlineSync.question('May I have your name?');
console.log(`Hello, ${user}!`);

if (playRound()) {
  console.log(`Congratulations, ${user}!`);
} else {
  console.log(`Let's try again, ${user}!`);
}
