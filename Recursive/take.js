//수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴해야 합니다.
//underbar에서 _.take 참조

function take(num, arr) {
  // if (num >= arr.length) {
  //   return arr;
  // }

  if (num === 0 || arr.length === 0) {
    return [];
  }

  // const [head, ...tail] = arr;
  const head = arr[0];
  const tail = arr.slice(1);

  return [head].concat(take(num - 1, tail));
}


let output = take(2, [1, -2, 1, 3]);
console.log(output); // --> [1, -2]

output = take(5, [1, -2, 1, 3]);
console.log(output); // --> [1, -2, 1, 3]