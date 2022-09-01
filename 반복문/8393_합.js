const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

let output = 0
for (let i = 1; i <= input; i++) {
  output += i
}

console.log(output)
