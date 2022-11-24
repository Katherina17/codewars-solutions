function inviteMoreWomen(L) {
    let menAndWomen = 0;
    for( let i = 0; i < L.length; i++){
      menAndWomen += L[i]; 
    }
     if( menAndWomen > 0) {
       return true;
     } else {
       return false;
     }
    
  }