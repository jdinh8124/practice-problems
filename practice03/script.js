// Build a function that sorts an array into a multidimensional array grouped by data type

//   - Write a function that takes one parameter
//     - Parameter 1 - An array of anything
//       - The function should output a multidimensional array grouped by data type
//         - Example:
// - `var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];`
//   - `groupArray(myArray);`
//   - Output - `[['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]`



var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

function groupArray(arrayParam){
  var newArray = [];
  var stringArray = [];
  var numArray = [];
  var booleanArray = [];
  for(var i = 0; i < arrayParam.length; i++){
    if (typeof arrayParam[i] === "string"){
      stringArray.push(arrayParam[i])
    }else if (typeof arrayParam[i] === "number"){
      numArray.push(arrayParam[i])
    }else{
      booleanArray.push(arrayParam[i]);
    }
}
  newArray.push(stringArray, numArray, booleanArray);
  return newArray;
}


console.log(groupArray(myArray));
