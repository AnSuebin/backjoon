const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const count = input[0]
const Numbers = input[1].split(' ').map(Number)

let max = Numbers[0]
let min = Numbers[0]

for (let i = 0; i < count; i++) {
  if (max < Numbers[i]) {
    max = Numbers[i]
  }
  if (min > Numbers[i]) {
    min = Numbers[i]
  }
}

console.log(min, max)
