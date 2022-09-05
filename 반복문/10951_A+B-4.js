let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

for (let i = 0; i < input.length; i++) {
  let A = parseInt(input[i].split(' ')[0])
  let B = parseInt(input[i].split(' ')[1])
  let output = A + B

  if (!output) {
    break
  } else {
    console.log(output)
  }
}
