const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n').map(Number)

const x = inputData[0]
const y = inputData[1]

if (x < 0 && y < 0) {
  console.log(3)
} else if (x < 0 && y > 0) {
  console.log(2)
} else if (x > 0 && y < 0) {
  console.log(4)
} else if (x > 0 && y > 0) {
  console.log(1)
}
