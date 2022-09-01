const fs = require('fs')

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number)

const [a, b, c] = [input[0], input[1], input[2]]

const max = function (array) {
  let output = array[0]
  for (const item of array) {
    if (output < item) {
      output = item
    }
  }
  return output * 100
}

const answer = (a, b, c) => {
  if (a === b && b === c) {
    return console.log(10000 + a * 1000)
  } else if (a === b || c === a) {
    return console.log(1000 + a * 100)
  } else if (b === c) {
    return console.log(1000 + b * 100)
  } else {
    return console.log(max([a, b, c]))
  }
}

answer(a, b, c)
