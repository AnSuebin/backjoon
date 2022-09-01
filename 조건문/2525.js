const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

const current = input[0].split(' ').map(Number)

const currentHour = current[0]
const currentMinute = current[1]
const cookTime = Number(input[1])

//모든 시간을 분으로 바꾸고 연산한 값에서 60을 나눈 값과 60을 나눴을 때의 나머지를 시와 분으로 나누기
// 만약  23시 30분에서

const cookEndTimeHour = parseInt(
  (currentHour * 60 + currentMinute + cookTime) / 60
)
const cookEndTimeMinute = parseInt(
  (currentHour * 60 + currentMinute + cookTime) % 60
)

console.log(
  cookEndTimeHour >= 24 ? cookEndTimeHour - 24 : cookEndTimeHour,
  cookEndTimeMinute
)
