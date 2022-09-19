const fs = require('fs');
// 끔찍한 런타임 에러 문제였다!
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let length = Number(input[0]);

for (let i = 1; i <= length; i++) {
  let counter = 1;
  let sum = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 'O') {
      // 다음이 O일경우, counter는 1 추가 되기
      sum += counter;
      counter++;
    } else {
      // X일경우, 1로 되돌아 가기
      counter = 1;
    }
  }
  console.log(sum);
}
