'use strict';

function find_average(array) {
 let ave = 0;
 let count = 0;
 for(let i =0; i < array.length; i++){
   ave += array[i];
   count ++;
 }
 console.log(ave);
 ave = ave / count;
 return ave;
}
