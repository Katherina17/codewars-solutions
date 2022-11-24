function countPositivesSumNegatives(input) {
    if(input == null || input.length == 0) return [];
    let positiveNum = 0;
    let negativeNum = 0;
    for (let i = 0; i < input.length; i++){
      if (input[i] > 0){
        positiveNum += 1;  
      }
      if (input[i] < 0){
        negativeNum += input[i];
      }
    }
     return [positiveNum,negativeNum];
  }