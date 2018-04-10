'use strict';

function formatWords(words){
  if(words === []){
    return '';
  }else{
  for( let i=1; i < words.length; i++){
     words.splice([i++],0,', ');
     console.log(words);
     if([i]== [words.length -1 ]){
     }
  }
  words[ words.length -2] = ' and ';
  return words.join('');
  }
}
