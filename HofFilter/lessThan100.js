function lessThan100(number) {
  return number < 100;
}

// function lessThan100(number) {
//   return typeof number === 'number' && number < 100;
// }


function getElementsLessThan100AtProperty(obj, property) {
  // TODO: 여기에 코드를 작성합니다.

  let arr = obj[property];
  
  if(Array.isArray(arr)){
 
      return arr.filter(el => typeof el === 'number' && lessThan100(el));
 
    // return arr.filter(lessThan100);
  } else{
    return [];
  }

 
}

const obj = {
  key: [1000, 20, 50, 500],
};

let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);