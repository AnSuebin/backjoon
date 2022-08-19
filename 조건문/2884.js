const fs = require('fs')
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ')

const A = parseInt(inputData[0])
const B = parseInt(inputData[1])

function solution(A, B) {
  if (B >= 45) {
    console.log(A + ' ' + (B - 45))
  } else if (A >= 1) {
    console.log(A - 1 + ' ' + (B + 15))
  } else {
    console.log(23 + ' ' + (B + 15))
  }
}

solution(A, B)
