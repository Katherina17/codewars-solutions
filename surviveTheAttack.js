function hasSurvived(attackers, defenders){
    let defendersCount = 0;
    let attackersCount = 0;
    for(let i = 0; i < defenders.length || i < attackers.length ; i++){
        if(defenders[i] > attackers[i] || attackers[i] == undefined){
            defendersCount++;
        } else {
            attackersCount++;
        }
    }
    if(defendersCount == attackersCount){
        let sumAttackers = attackers.reduce((acc, curr) => acc + curr, 0);
        let sumDefenders = defenders.reduce((acc, curr) => acc + curr, 0);
        if(sumAttackers > sumDefenders){
            return false;
        } else {
            return true;
        }
    }
    return defendersCount > attackersCount;
}