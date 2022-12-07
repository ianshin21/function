function getDoubledElements(arr) {
 
  // let doubleN = function(num){
  //   return num * 2;
  // }

  // // return arr.map(doubleN);
  // return newArr = arr.map(doubleN);

  // return arr.map(function (el) {
  //   return el * 2;
  // });
  return arr.map((el)=> el * 2)
}


let output = getDoubledElements([1, 2, 3, 4]);
console.log(output);