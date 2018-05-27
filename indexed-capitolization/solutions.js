'use strict';

function capitalize(str,arr){

  var strArr = str.split('');
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > strArr.length) {
      continue;
    }
    var strIdx = '' + strArr[arr[i]]
    strArr.splice(arr[i], 1, strIdx.toUpperCase())
  }
  return strArr.join('');
}
