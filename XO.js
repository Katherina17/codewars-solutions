function XO(str) {
    str = str.toUpperCase();
    let letters = {};
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i ++){
      if(letters[str[i]]){
        letters[str[i]] += 1;
      } else {
        letters[str[i]] = 1;
      }
    }
    for(let value in letters){
    
      if (value === 'X'){
        x = letters[value]
      };
      if ( value === 'O'){
        o = letters[value];
      }}
     if (x === o) {return true} else return false;
  
}