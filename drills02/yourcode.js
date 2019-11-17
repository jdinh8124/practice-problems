function countOccurences(arrayParam, wordNeedle){
  var counter = 0;
  for(var i =0; i < arrayParam.length; i++){
    if(arrayParam[i] === wordNeedle){
      counter += 1;
    }
  }
  return counter;
}

function wordLengths(wordsArray){
  var newArray = [];
  for(var i =0; i < wordsArray.length; i++){
    numToPush = 0;
    numToPush = wordsArray[i].length;
    newArray.push(numToPush);
  }
  return newArray;

}

function getMinMaxMean(arrayToMath){
  var mathObject = {};
  var greatestNum = null;
  var smallestNum = null;
  var mean = null;
  for(var i =0; i < arrayToMath.length; i++){
    mean += arrayToMath[i];
    if (greatestNum < arrayToMath[i]){
      greatestNum = arrayToMath[i];
    }
    if(smallestNum === null ){
      smallestNum = arrayToMath[i];
    }
    else if (smallestNum > arrayToMath[i]) {
      smallestNum = arrayToMath[i];
    }
  }
  var meanAnswer = mean / arrayToMath.length;
  mathObject.min = smallestNum;
  mathObject.max = greatestNum;
  mathObject.mean = meanAnswer;
  return mathObject;
}

function findMode(arrayNum){
  var times = 0;
  var highestOcc = null;
  var mostNum = null;
  for(var i =0; i <arrayNum.length; i++){

    for(var m = 0; m <arrayNum.length; m++){
      if(arrayNum[i] === arrayNum[m]){
        times+=1;
        if (highestOcc <= times) {
          highestOcc = times;
          mostNum = arrayNum[i];
        }
      }

    }
    times = 0;
  }
//   - findMode: Given an array of numbers, find the number that occurs the most often for example:
//     - input[5, 2, 7, 18, 2, 42, 5, 2]
//       - returns 2, since it occurs 3 times.If 2 numbers occur the same amount, return the last one
  return mostNum;
}
