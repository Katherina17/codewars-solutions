function solution(frank, sam, tom) {
    let count = 0;
    for(let i = 0; i < frank.length; i++){
        for(let j = 0; j < sam.length; j++){
            if(frank[i] > sam[j] && frank[i] > tom[j]){
                delete sam[j];
                delete tom[j];
                count += 1;
            }
        }
    }

    return count >= 2;
}