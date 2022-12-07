function square(number) {
  return number * number;
}

function getSquaredElementsAtProperty(obj, property) {
  
  let arr = obj[property];

  // if(Array.isArray(arr)){
  //   return arr.map(function(el){
  //     return square(el);
  //   })
  // }else {
  //   return [];
  // }
  if(Array.isArray(arr)) return arr.map(el => square(el));
  else return [];
  
  
}


const obj = {
  key: [2, 1, 5],
};

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output);