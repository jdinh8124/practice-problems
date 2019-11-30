// ## Sort

// Build a function that takes in an array of strings and outputs a new array with the same strings in alphabetical order.

// - Write a function that takes one parameter
//   - Parameter 1 - An Array of strings
//     - The function should output an array containing all the strings from the input array but in alphabetical order
//       - Example:
//
//   - Output - `['cat', 'dog', 'human', 'mouse']`
//   - Try doing this using a ** Bubble Sort **, if you are unsure what that is < a href = "https://www.google.com" target = "_blank" > Click Here</a >
var myArray = ['mouse', 'cat', 'dog', 'human'];

function sort(arrayOfStrings){
  var swap;
  var n = arrayOfStrings.length - 1;
  // var x = arrayOfStrings;
  do{
    swap = false;
    for(var i=0; i < n; i++){
      if(arrayOfStrings[i][0]> arrayOfStrings[i+1][0]){
        var temp = arrayOfStrings[i+1];
        arrayOfStrings[i+1] = arrayOfStrings[i];
        arrayOfStrings[i] =temp;
        swap = true;
      }
    }
    n--
  } while(swap);
  return arrayOfStrings;
}

console.log(sort(myArray));
