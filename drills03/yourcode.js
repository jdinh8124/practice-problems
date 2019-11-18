// - getPath: given a path string, return an array with the different parts of the path for
// 	- example: 'folder1/folder2/folder3'
//     - returns['folder1', 'folder2', 'folder3']

// var findingTheStartOfSource = foundImg.lastIndexOf('/') + 1;
// var findingSpotOfImgSource = foundImg.lastIndexOf('.');
// var imageUrlWithoutPath = foundImg.slice(findingTheStartOfSource, findingSpotOfImgSource);



function getPath(path){
  var sliced = [];
  var startOfLastDash = path.lastIndexOf("/");
  var startofFirst = path.indexOf("/")
  var firstFolder = path.slice(0, startofFirst);
  var secondFolder = path.slice(startofFirst+1, startOfLastDash);
  var thirdFolder = path.slice(startOfLastDash+1, path.length);
  sliced.push(firstFolder, secondFolder, thirdFolder);

  return sliced;
}

function getPathParts(){

}

function getCapitalCount(){

}

function correctCalcChecker(){

}

function doMath(){

}
