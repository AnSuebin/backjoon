let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

for (let i = 0; i < input.length - 1; i++) {
  let A = Number(input[i].split(' ')[0])
  let B = Number(input[i].split(' ')[1])
  console.log(A + B)

  if (A + B === 0) {
    break
  }
}
