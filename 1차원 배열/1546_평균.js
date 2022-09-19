const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let length = Number(input[0]);
let scores = input[1].split(' ');
let scoreslist = scores.map((score) => Number(score));

let maxScore = scoreslist[0];
for (let i = 0; i < scoreslist.length; i++) {
  if (maxScore < scoreslist[i]) {
    maxScore = scoreslist[i];
  }
}

let upperSum = 0;
for (let j = 0; j < scoreslist.length; j++) {
  upperSum += (scoreslist[j] / maxScore) * 100;
}

let answer = upperSum / length;

console.log(answer);
