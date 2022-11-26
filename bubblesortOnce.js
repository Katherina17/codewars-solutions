function bubblesortOnce(a) {
  
    let newArr = a.slice('');
    
    for(let i = 0; i < newArr.length - 1; i++){
      if(newArr[i] >= newArr[i+1]){
        let buff = newArr[i];
        newArr[i] = newArr[i+1];
        newArr[i+1] = buff;
      }
    }
    return newArr;
  }