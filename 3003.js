const fs = require('fs')
const inputData = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(Number)

const chess = [1, 1, 2, 2, 2, 8]

let answer = inputData.map((Numver, ind) => {
  return chess[ind] - Numver
})

console.log(...answer)
