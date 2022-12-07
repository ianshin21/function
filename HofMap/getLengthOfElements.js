function getLengthOfElements(arr) {
  
  // let elLength = function(el){
  //   return el.length;
  // }
  // return arr.map(elLength);

  // return arr.map(function (el) {
  //   return el.length;
  // });
  
  return arr.map((el)=> el.length)
}


let output = getLengthOfElements(['', 'a', 'ab', 'abc']);
console.log(output);