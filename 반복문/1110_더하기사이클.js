let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString()

let A = ''
let B = ''
let output = ''
if (input.length === 2) {
  A = input[0]
  B = input[1]
} else if (input[0] === 0 && input[1] === 0) {
  output = 1
} else {
  A = 0
  B = input[0]
}

// while()
