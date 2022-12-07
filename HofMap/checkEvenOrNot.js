function checkEvenOrNot(arr) {
 
  // let newEl = function(el){
  //   if (el % 2 == 0 && el != 0){
  //     return 'ok';
  //   }else{
  //     return 'no';
  //   }
  // }
  // return arr.map(newEl);
  
  return arr.map((el) => {
    if(el % 2 === 0 && el !== 0){
      return 'ok'
    }else {
      return 'no'
    }
  })
}


let output = checkEvenOrNot([1, 2, 3, 4]);
console.log(output);