function eqSumPowdig(hMax, exp) {
    let result = [];
  
    for(let i = 2; i <= hMax; i++){
        let numToStr = i.toString().split('');
        let checkVal = 0;
        for(let j = 0; j < numToStr.length; j++){
          checkVal += Math.pow(numToStr[j],exp);
        }
        if(checkVal == i){
          result.push(i);
        }
    }
    return result;
  }