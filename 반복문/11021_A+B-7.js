let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let count = Number(input[0])

for (let i = 1; i <= count; i++) {
  let num = input[i].split(' ')
  console.log(`Case #${i}: ${Number(num[0]) + Number(num[1])}`)
}
