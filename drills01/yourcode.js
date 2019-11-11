
function sumArray(arrayAdd){
  var numbersAdded = null;
  for (var loopAndAdd = 0; loopAndAdd < arrayAdd.length; loopAndAdd++ ){
    numbersAdded +=  arrayAdd[loopAndAdd];
  }
  return numbersAdded;
}

function fitWithinVal(arrayParam, numberParam){



  // - fitWithinVal: given an array and a number, sum the array until you reach the number.keep adding any values that would total below the given value return an array of every number you could add For example:
  // - input: [1, 100, 2, 4, 5, 6], 7)
  // - return [1, 2, 4]

}
function getAllNamesShorterThan(nameArray, nameNumber){
  var namesLessThanNum = [];
  for(var nameIndex = 0; nameIndex < nameArray.length; nameIndex++){
    if(nameArray[nameIndex].length < nameNumber){
      namesLessThanNum.push(nameArray[nameIndex]);
    }

  }

  return namesLessThanNum;


  // - getAllNamesShorterThan: Given an array of names and a value, return an array of only the names shorter than the given value for example:
  //   - input['Clyde', 'Sue', 'Jerry', 'Jo'], 4
  //     - return ['Sue', 'Jo']

}

function makeLabel(inputObject){
  return inputObject.greeting + " " + inputObject.givenName + " " +  inputObject.familyName + " \\ " + inputObject.streetNumber + " " + inputObject.streetName + "\\" + "n" + inputObject.city + ", "
    + inputObject.state + " " + inputObject.zip;
}


// - given an object with data for a person in it, generate a shipping label in the following form:
// - input:
// [
//   {
//     "familyName": "McGee",
//     "givenName": "Chuckles",
//     "greeting": "Miss.",
//     "age": 28,
//     "height": 165,
//     "colors": {
//       "eye": "green",
//       "hair": "green"
//     },
//     "home address": {
//       "streetNumber": "12345",
//       "streetName": "Any St",
//       "state": "Mo",
//       "zip": 63102,
//       "city": "Kansas City"
//     }
//   }
// ]
//   - return "Miss. Chuckles McGee\n12345 Any St\nKansas City, Mo 63102"
