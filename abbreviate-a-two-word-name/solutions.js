'use strict';

function abbrevName(name){
    let newName = "";

    newName +=name[0];
    for(let i=0;i<name.length;i++){
      if (name[i] ==" ") {
      newName += '.';
      [i++];
      newName += name[i];
      };
    }
    return newName.toUpperCase();
};
