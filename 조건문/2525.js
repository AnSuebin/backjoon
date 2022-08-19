const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const current = input[0].split(' ').map(Number)

const currentHour = current[0]
const currentMinute = current[1]
const cookTime = Number(input[1])

let Hour
let Minute
if (currentMinute >= cookTime) {
  Hour = currentHour
  Minute = currentMinute - cookTime
} else if (currentHour >= 1) {
  Hour = currentHour - 1
  Minute = currentMinute + 60 - cookTime
} else {
  Hour = 23
  Minute = currentMinute + 60 - cookTime
}

console.log(Hour + ' ' + Minute)
