// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function myFunction(arrNum) {
    return arrNum.reduce((acc, cur) => acc + cur, 0) / arrNum.length
  }
  console.log(myFunction([10,100,40]))