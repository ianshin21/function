//수(num)와 배열을 입력받아 차례대로 num개의 요소가 제거된 새로운 배열을 리턴해야 합니다.
// underbar에서 _.drop 참조

function drop(num, arr) {
  // if (num >= arr.length) {
  //   return [];
  // }

  if (num === 0 || arr.length === 0) {
    return arr;
  }

  // const [head, ...tail] = arr;
  const tail = arr.slice(1);
  return drop(num - 1, tail);
}


let output = drop(2, [1, -2, 1, 3]);
console.log(output); // --> [1, 3]

output = drop(5, [1, -2, 1, 3]);
console.log(output); // --> [ ]