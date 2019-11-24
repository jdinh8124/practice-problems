function getPath(path){
  var sliced = [];
  sliced = path.split("/")
  console.log(sliced)
  return sliced;
}

function getPathParts(url){
  var objectReturn = {};
  objectReturn.protocol = url.substring(0, url.indexOf(":"));
  objectReturn.host = url.slice(url.indexOf("/") +2, url.lastIndexOf(":"));
  objectReturn.port = parseInt(url.slice(url.lastIndexOf(":") + 1, url.indexOf("/", url.lastIndexOf(":") + 1)));
  objectReturn.path = url.slice(url.indexOf("/", url.indexOf("/", url.lastIndexOf(":"))) +1, url.lastIndexOf("/"));
  objectReturn.file = url.slice(url.lastIndexOf("/") + 1, url.length);
  return objectReturn;
}

function getCapitalCount(array){
  var capitalLetters = 0;
  for(var i = 0; i < array.length; i++){
    if (array[i][0] === array[i][0].toUpperCase()){
      capitalLetters += 1;
    }
  }
  return capitalLetters;
}


// - correctCalcChecker: Given an array of objects with math equations, return all objects that have correct equations for
// 	- example: [
//     { num1: 3, num2: 3, op: '/', result: 3 },
//     { num1: 12, num2: 4, op: '-', result: 8 },
//     { num1: 2, num2: 3, op: '+', result: 5 },
//     { num1: -5, num2: -2, op: '*', result: 10 }
//   ]
//     - returns[
//     { num1: 12, num2: 4, op: '-', result: 8 },
//     { num1: 2, num2: 3, op: '+', result: 5 }
//     ]

function correctCalcChecker(arrayMath){
   var  newArrayToPush =[];
  for(var i = 0; i < arrayMath.length; i++){
    if(doMath(arrayMath[i].num1,arrayMath[i].op,arrayMath[i].num2) === arrayMath[i].result){
        newArrayToPush.push(arrayMath[i]);
    }
  }
  return newArrayToPush;
}

function doMath(num1, op, num2){
  var mathResult = null;
  switch(op){
    case "+":
      mathResult = num1 + num2;
      break;
    case "-":
      mathResult = num1 - num2;
      break;
    case "*":
    case "x":
    case "X":
      mathResult = num1 * num2;
      break;
    case "/":
      mathResult = num1 / num2;
      break;
  }
  return mathResult;
}
