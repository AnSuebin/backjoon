const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let total = Number(input[0])
let count = Number(input[1])

input.splice(0, 2)

let check = 0
for (let i = 0; i < count; i++) {
  let [price, num] = input[i].split(' ')
  check += Number(price) * Number(num)
}

if (total === check) {
  console.log('Yes')
} else {
  console.log('No')
}
