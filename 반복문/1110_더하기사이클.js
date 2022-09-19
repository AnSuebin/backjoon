let input = require('fs').readFileSync('/dev/stdin').toString()
//Input 값을 받아 origin에 숫자로 담는다
let origin = Number(input)
let count = 0

while (true) {
  // input에 아래자리들을 버려줘야함
  let sum = Math.floor(input / 10) + (input % 10)
  //새로운 input값을 갱신
  input = (input % 10) * 10 + (sum % 10)
  //while 돌때마다 count 값을 1씩 증가시킨다
  count++
  if (origin === input) break
}

console.log(count)
