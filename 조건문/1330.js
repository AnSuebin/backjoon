const fs = require('fs')
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ')

const A = parseInt(inputData[0])
const B = parseInt(inputData[1])

const compare = function (a, b) {
  if (a > b) {
    return '>'
  } else if (a < b) {
    return '<'
  } else if (a === b) {
    return '=='
  }
}

console.log(compare(A, B))
