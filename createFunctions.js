function createFunctions(n) {
    var callbacks = [];
  
    for (var i=0; i<n; i++) {
      const func = function() {
        return callbacks.indexOf(func);
      }
      callbacks.push(func);
    }
    return callbacks;
  }