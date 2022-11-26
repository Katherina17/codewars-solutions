function scoreOfDive(scores, tariff) {
    let maxNum1 = -1;
    let maxNum2 = -1;
    let minNum1 = 11;
    let minNum2 = 11;
    let obj = {};
    let totalScore = 0;
    
    for (let i = 0; i < scores.length; i++){
      if (obj.hasOwnProperty(scores[i])){
        obj[scores[i]] += 1;
      } else {
        obj[scores[i]] = 1;
      }
    }
  
    minNum1 = Math.min( ...Object.keys(obj));
    if(obj[minNum1] == 1) {
      delete obj[minNum1];
    }
    else {
      obj[minNum1]--;
    }
    
      minNum2 = Math.min( ...Object.keys(obj));
    if(obj[minNum2] == 1) {
      delete obj[minNum2];
    }
    else {
      obj[minNum2]--;
    }
    
      maxNum1 = Math.max( ...Object.keys(obj));
    if(obj[maxNum1] == 1) {
      delete obj[maxNum1];
    }
    else {
      obj[maxNum1]--;
    }
    
     maxNum2 = Math.max( ...Object.keys(obj));
    if(obj[maxNum2] == 1) {
      delete obj[maxNum2];
    }
    else {
      obj[maxNum2]--;
    }
    
    
    for(let key of Object.keys(obj)){
      totalScore += key * obj[key];
    }
    
    totalScore *= tariff;
    
    return totalScore.toLocaleString(
      undefined, // leave undefined to use the visitor's browser 
                 // locale or a string like 'en-US' to override it.
      { minimumFractionDigits: 2 })
  }