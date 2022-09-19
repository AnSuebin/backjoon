const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
//1. 숫자로 바꾸기
const numbers = input.map((num) => +num);
//2. 42 나머지 리스트 만들기
let remainders = numbers.map((num) => num % 42);
//3. 중복 제거한 객체{} 만들기 / 리스트 아님
const setRemainders = new Set(remainders);
//**4. 리스트로 하고 싶다면, [...setRemainders]**/
const RemainderList = [...setRemainders];
//5. 객체 크기 구하기
const answer = RemainderList.length;
console.log(answer);
