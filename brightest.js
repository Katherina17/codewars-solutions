function brightest(colors){
    let maxBrightColor = undefined;
    let maxValue = -1;
    for(let color of colors){
      let convertedValue ='';
      for(let i = 1; i < color.length; i+=2){
        convertedValue = parseInt(color.slice(i,i+2), 16);
        if(convertedValue > maxValue){
          maxValue = convertedValue;
          maxBrightColor = color;
        }
      }
    }
    return maxBrightColor;
  }