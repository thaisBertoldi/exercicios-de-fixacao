// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction(arr) {
    let temp = arr[0]
    let temp2 = 0;
    for(let i=0; i<arr.length; i++) {
      if(arr[i] === temp){
        temp2++
      }
    }
    return temp2 === arr.length
  }
  console.log(myFunction(['10',10,10,10]))