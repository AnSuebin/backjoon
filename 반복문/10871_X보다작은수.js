let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let inputs = []
inputs = input[0].split(' ')
// console.log(inputs);  //--> [ '10', '5' ]

let total = Number(inputs[0])
let limit = Number(inputs[1])

let numbers = []
numbers = input[1].split(' ')
// console.log(numbers);  //-->  [ '1', '10', '4', '9', '2', '3', '8', '5', '7', '6' ]

const outputList = numbers.filter((num) => num < limit)
let output = ''
for (let i = 0; i < outputList.length; i++) {
  output += outputList[i] + ' '
}

console.log(output)
