function vaporcode(string) {
    string = string.toUpperCase().replace(/\s/g, '');
    let newString = '';
    let i = 0;
    while( i < string.length){
      newString += string[i] + ' ' + ' ';
      i++;
    }
    return newString.trim();
  }