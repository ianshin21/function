function computeProductOfAllElements(arr) {

  // let multiAll = function(ac, cu){
  //   if(arr.length > 0){
  //     return ac * cu;    
  //   }else if(arr.length === 0){
  //     // return 1;
  //   }
  // }
  // return arr.reduce(multiAll, 1);

  return arr.reduce((acc, cur) => {
    if(arr.length > 0){
      return acc * cur;
    }
  }, 1);


}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output);