const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const numbers = input.map((num) => +num)

let max = numbers[0]
let count = 1
for (let i = 0; i < numbers.length; i++) {
  if (max < numbers[i]) {
    max = numbers[i]
    count = i + 1
  }
}

console.log(max)
console.log(count)
