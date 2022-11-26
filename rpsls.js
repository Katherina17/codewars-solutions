function rpsls(pl1,pl2){
    let itemsLink = [{
      player1: 'scissors',
      player2: 'paper',
    },
      {
      player1: 'paper',
      player2: 'rock',
    },
      {
      player1: 'rock',
      player2: 'lizard',
    },
     {
      player1: 'lizard',
      player2: 'spock',
    },
    {
      player1: 'spock',
      player2: 'scissors',
    },
    {
      player1: 'scissors',
      player2: 'lizard',
    },
                     {
      player1: 'lizard',
      player2: 'paper',
    },
                    {
      player1: 'paper',
      player2: 'spock',
    },
                    {
      player1: 'spock',
      player2: 'rock',
    },{
      player1: 'rock',
      player2: 'scissors',
    }];
    
    if(pl1 === pl2){
      return 'Draw!'
    }
    
   for(let item of itemsLink){
     if(item.player1 === pl1 && item.player2 === pl2){
       return 'Player 1 Won!';
     }
     if(item.player1 === pl2 && item.player2 === pl1){
        return 'Player 2 Won!';
     }
   }
  }