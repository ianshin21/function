function computeSumOfAllElements(arr) {

  // let elSum = function(acc, cur){
  //    return acc + cur;   
  // }
  //   return arr.reduce(elSum, 0);

  // if (arr.length === 0) return 0;
  // return arr.reduce(function (acc, val) {
  //   return acc + val;
  // });

  return arr.reduce((acc, cur) => acc + cur, 0);
}

let output = computeSumOfAllElements([1, 2, 3]);
console.log(output); 