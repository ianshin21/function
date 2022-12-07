function getLongestElement(arr) {
  return arr.reduce(function (a, b) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }, '');
}


function getLongestElement(arr) {
  // 여기에 코드를 입력하세요
  // if(arr.length != 0){
  //  return arr.reduce((acc, cur) => {
  //   if(acc.length < cur.length) return cur;
  //   else return acc;
  //   })
  // }else{
  //   return '';
  // }

    return arr.reduce((acc, cur) => {
    if(acc.length < cur.length) return cur;
    else return acc;
    }, '')
}


let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'

output = getLongestElement(['one', 'two', 'wow']);
console.log(output); // --> 'one'