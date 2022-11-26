function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays == null) return 0;
    if (arrayOfArrays.length == 0 ) return 0;
    let sum = 0;
    let result = 0;
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    for (let i = 0; i < arrayOfArrays.length; i++){
      if (arrayOfArrays[i] == null) return 0;
      if (arrayOfArrays[i].length == 0 ) return 0;
      let lengths = arrayOfArrays[i].length;
      sum += lengths;
      if(lengths > max) max = lengths;
      if(lengths < min) min = lengths;
    }
    let sumMax = (max*(max+1))/2;
    let sumMin = ((min - 1)*(min))/2;
    result = sumMax - sumMin - sum;
    return result;
  }