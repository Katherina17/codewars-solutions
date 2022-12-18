function solution(start, finish)
{
    let jumps = 0;
    let currentShelf = start;
    while(currentShelf < finish - 3){
        currentShelf += 3;
        jumps += 1;
    }

    if(currentShelf === finish) return jumps;
    else if(finish - currentShelf == 2) return jumps + 2;
    else return jumps + 1;

}