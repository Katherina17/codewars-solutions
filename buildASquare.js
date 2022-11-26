function generateShape(integer){
    let square = '';
    for(let i = 0; i < integer; i++){
      if(integer == 1){
        return square = '+';
      }
      square += '+';
    }
    let newVar = square;
    
      for(let j = 0; j < integer - 1; j ++){
        square += '\n' + newVar;
      }
    
    return square;
  }