function isValidNumber(num) {
    let compareValue = 0;
    let currValue = String(num).split('');
    for(let j = 0; j < currValue.length; j++){
      compareValue += Number(currValue[j]) ** (j + 1);
    }
    return compareValue === num;
  }
  
  function sumDigPow(a, b) {
    let formattedArray = [];
    for(let i = a; i <= b; i++){
      if(isValidNumber(i)){
        formattedArray.push(i);
      }
    }
    return formattedArray;
  }