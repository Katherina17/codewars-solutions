// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
    let state = "Nothing";
    
    for(let button of buttons) {
      state = getNextState(state, button);
    }
    
    return state;
  }
  
  function getNextState(curState, action) {
    const rules = {
      "NothingLike": "Like",
      "NothingDislike": "Dislike",
      "LikeDislike": "Dislike",
      "DislikeLike": "Like",
      "LikeLike": "Nothing",
      "DislikeDislike": "Nothing"
    }
    return rules[curState + action];
  }