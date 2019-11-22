// - getPath: given a path string, return an array with the different parts of the path for
// 	- example: 'folder1/folder2/folder3'
//     - returns['folder1', 'folder2', 'folder3']

// var findingTheStartOfSource = foundImg.lastIndexOf('/') + 1;
// var findingSpotOfImgSource = foundImg.lastIndexOf('.');
// var imageUrlWithoutPath = foundImg.slice(findingTheStartOfSource, findingSpotOfImgSource);
// var startOfLastDash = path.lastIndexOf("/");
// var startofFirst = path.indexOf("/")
// var firstFolder = path.slice(0, startofFirst);
// var secondFolder = path.slice(startofFirst + 1, startOfLastDash);
// var thirdFolder = path.slice(startOfLastDash + 1, path.length);
// sliced.push(firstFolder, secondFolder, thirdFolder);

// - getPathParts: Given a full URL string, break it up into parts in an object For
//   - example: 'http://localhost:8000/happy/go/lucky/file.html'
//     - return { protocol: 'http', host: 'localhost', port: 8000, path: '/happy/go/lucky', file: 'file.html' }

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
  objectReturn.port = url.slice(url.lastIndexOf(":") +1, url.lastIndexOf(":"));
  objectReturn.path = url.slice(url.indexOf(":") +2, url.lastIndexOf("/"));
  objectReturn.file = url.slice(url.lastIndexOf("/") + 1, url.length);
  return objectReturn;
}

function getCapitalCount(){

}

function correctCalcChecker(){

}

function doMath(){

}
