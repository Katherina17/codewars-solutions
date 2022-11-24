function barista(coffees){
    if(coffees === undefined) return coffees;
    coffees.sort((a,b) => a - b );
    let finalTime = 0;
    let sum = 0;
    for(let i = 0; i < coffees.length; i++){
        finalTime += coffees[i] + 2;
        sum += finalTime;
      sum = sum - 2;
    }
    return sum;
  }