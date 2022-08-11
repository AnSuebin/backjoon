const fs = require('fs')
const inputData = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map(Number)

const A = parseInt(inputData[0])
const B = parseInt(inputData[1])

const oneNum = B % 10
const tenNum = Math.floor((B % 100) / 10)
const hundredNum = Math.floor(B / 100)

console.log(A * oneNum)
console.log(A * tenNum)
console.log(A * hundredNum)
console.log(A * B)
