function timeCorrect(timestring) {
    if(timestring == null) return null;
    if(timestring.length == 0) return '';
    let splitArray = timestring.split(':');
    if(splitArray.length !== 3) return null;
    for(let i = 0; i < splitArray.length; i++){
        if(Number.isInteger(+splitArray[i])) {
            splitArray[i] = Number(splitArray[i]);
        } else {
            return null;
        }
    }

    let curHour = splitArray[0];
    let curMin = splitArray[1];
    let curSec = splitArray[2];

    if(curSec >= 60){
        curSec -= 60;
        curMin += 1;
    }
    if(curMin >= 60){
        curMin -= 60;
        curHour += 1;
    }

    curHour = curHour % 24;

    let result = String(curHour).padStart(2, '0') + ':' + String(curMin).padStart(2, '0') + ':' + String(curSec).padStart(2, '0');
    return result;
}