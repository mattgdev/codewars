'use strict';

function cubeOdd(arr) {
let newNum = 0;
let holdVal = 0;
for(let i = 0; i < arr.length; i++){
 if(typeof arr[i] === "string"){
   return undefined;
 }else{
 holdVal = Math.pow(arr[i],3);
 console.log(holdVal);
 if( 0 != holdVal%2){
   newNum += holdVal;
   console.log(newNum);
 }
}
}
return newNum;
}
