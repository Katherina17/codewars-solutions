function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))){
      let num = Math.sqrt(sq);
      num = num+1;
      return num*num;
    } else{
        return -1;
    }
  }