function geometricSequenceElements(a, r, n){
    let numbers = [a];
    let i = 1;
    while(i <= n-1){
      numbers.push(numbers[i-1]*r);
      i++;
    }
    return numbers.join(', ');
  }