function numberOfPairs(gloves){
    let commnCount = 0;
    let newCouple = 0;
    let object = {};
    for (let i = 0; i < gloves.length; i++){
      let key = gloves[i];
      if (object[key] === undefined){
        object[key] = 1;
      } else {
        object[key] +=1;
      }
    } 
    for(let key in object){
      commnCount = Math.floor(object[key] / 2);
      newCouple += commnCount;
    }
     return newCouple;
    }