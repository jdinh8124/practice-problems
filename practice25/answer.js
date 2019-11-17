var first_array = [3, -5, 15, 4];
var second_array = [3, 18, -5, -4]


function add_arrays(arr1, arr2){
  var sum = null;
  var length = null;
  var sumArray = [];
  if(arr1.length > arr2.length){
      length = arr2.length;
  }else{
    length = arr1.length;
  }
  for(var i = 0; i < length; i++){
    if (typeof arr1[i] === "number" && typeof arr2[i] === "number"){
      sum = arr1[i] + arr2[i];
    }else{
      sum = NaN;
    }
    sumArray.push(sum);
  }
  return sumArray;
}

console.log(add_arrays(first_array, second_array));
