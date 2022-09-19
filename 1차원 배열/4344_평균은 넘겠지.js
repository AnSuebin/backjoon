const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let length = Number(input[0]);

for (let i = 1; i <= length; i++) {
  // 0. 중요! 꼭 input을 split로 나눠주기 //
  let cases = input[i].split(' ');
  let sum = 0;
  let count = 0;
  //1. i라인의 인덱스 1부터 끝까지 합계 구하기
  let innerLength = +cases[0];
  for (let j = 1; j <= innerLength; j++) {
    sum += +cases[j];
  }
  //2. 합계 나누기 list 인덱스로 평균 구하기
  let average = sum / innerLength;

  //3. 평균보다 큰 것들 갯수 구하기
  for (let k = 1; k <= innerLength; k++) {
    if (average < +cases[k]) {
      count++;
    }
  }

  //4. 큰것들 갯수 나누기 list 길이 곱하기 백
  let answer = ((count / innerLength) * 100).toFixed(3);
  console.log(`${answer}%`);
}
