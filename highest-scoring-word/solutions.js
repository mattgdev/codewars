'use strict';

function high(x){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let wordScores = [];
  let highScore = 0;
  let stringOut = "";
  x = x.toLowerCase();
  let xArray = x.split(" ");
  for (let i = 0; i < xArray.length; i ++){
    wordScores[i]=0;
    for (let j = 0; j < xArray[i].length; j++){
      if(alphabet.indexOf(xArray[i][j])!==-1)
        wordScores[i]+= alphabet.indexOf(xArray[i][j])+1;
    }
  }
  for (let k = 0; k < xArray.length; k ++)
    if (wordScores[k]>highScore){
      highScore = wordScores[k];
      stringOut = xArray[k];
    }
  return stringOut;
}
