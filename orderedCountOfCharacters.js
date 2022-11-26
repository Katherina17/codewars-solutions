const orderedCount = function (text) {
    let arr = [];
    let sortedArr = [];
    if(text === undefined){
      return [];
    }
    let countedList = {};
    for(let i =0; i < text.length; i++){
      if(countedList[text[i]] === undefined){
        countedList[text[i]] = 1;
        arr.push(text[i])
      } else{
        countedList[text[i]] += 1;
      }
    }
    
  for(let i = 0; i < arr.length; i++){
    for(let prop in countedList){
      if(arr[i] === prop){
        sortedArr.push([arr[i], countedList[prop]])
      }
    }
  }
  
    return sortedArr;
  }
  