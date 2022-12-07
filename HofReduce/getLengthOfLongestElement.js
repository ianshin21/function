function getLengthOfLongestElement(arr) {
  
  if(arr.length != 0){
   return arr.reduce((acc, cur) => {
    if(acc.length < cur.length) return cur;
    else return acc;
    }).length
  }else{
    return 0;
  }


}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output);



function getLengthOfLongestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce(function (acc, cur) {
    if (acc.length >= cur.length) {
      return acc;
    } else {
      return cur;
    }
  }).length;
}