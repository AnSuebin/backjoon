const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const leapYear = function (year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return '1'
  } else {
    return '0'
  }
}

console.log(leapYear(input))
