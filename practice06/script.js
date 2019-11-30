// ## Numeric Spirals

// Build a function that takes one parameter and prints out the Fibonacci sequence based on the input parameter.

// - Write a function that takes one parameter
//   - Parameter 1 - A number
//     - The function should output the Fibonacci sequence to the number of spaces set by parameter 1 starting from zero.
// - Example:
// - `fibSequence(12);`
//   - Output - `0 1 1 2 3 5 8 13 21 34 55 89`
//   - If you are unfamiliar with the Fibonacci sequence < a href = "https://www.google.com" target = "_blank" > Click Here

function fibSequence(number){
  var array = [];
  var first = 0;
// do
  for(var i = 0; i < number; i++){

    var second = parseInt(i);
    var currentNum = first + second;
    first = parseInt(i)
    array.push(currentNum)
  }

  return array;
}

console.log(fibSequence(12));
