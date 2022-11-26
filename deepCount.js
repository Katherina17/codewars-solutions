function deepCount(a){
    if (typeof a !== 'object') return 1;
    if (a.length == 0) return 0;
    let sum = 0;
    for (let i = 0; i < a.length; i++){
      sum += deepCount(a[i]);
      if (typeof a[i] == 'object'){
        sum += 1;
      }
    }
    return sum;
  }