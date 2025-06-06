function receivesAFunction(callback){
  return callback()
}

function returnsANamedFunction(){
  return function named(){
    return `I am named.`
  }

}

function returnsAnAnonymousFunction() {
  return function(){
    
  }
}

