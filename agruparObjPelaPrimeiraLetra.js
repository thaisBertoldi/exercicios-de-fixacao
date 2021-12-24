// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction(arrayObj) {
    var inicial = [];
    arrayObj.forEach(e=>{inicial.push(e.charAt(0).toLowerCase())}); 
    inicial = new Set(inicial);
    var obj={};
    inicial.forEach(e=>{ arrayObj.forEach(ob=>{(ob.charAt(0).toLowerCase() === e) ? ((obj[e] !== undefined) ? obj[e].push(ob) : obj[e]=[ob] ): 0}) })
  
  return obj;
  }
  
  console.log(myFunction(['Alf', 'Alice', 'Ben']));
