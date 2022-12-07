function isOdd(num) {
  
  if(num === 0) {
    return false;
  }else if(num === 1){
    return true
  }

  if(num < 0){
      return isOdd(-num)
  }

  if(num > 0){
     return isOdd(num - 2);
  }
 
}

let output = isOdd(17);
console.log(output);