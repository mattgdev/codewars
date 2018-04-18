'use strict';

function disemvowel(str) {
  let splitStr = str.split('');
  for(let i = 0; i < splitStr.length; i++){
    if ( splitStr[i] === 'a' || splitStr[i] === 'e' ||  splitStr[i] === 'i' || splitStr[i] === 'o' ){
        splitStr.splice(i, 1);
    }
    if ( splitStr[i] === 'u' || splitStr[i] === 'O'|| splitStr[i] === 'a' ){
        splitStr.splice(i, 1);
    }
  }
  return splitStr.join('');
}
