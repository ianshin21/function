//배열을 입력받아 모든 요소의 논리합(or)을 리턴해야 합니다.

function or(arr) {
  if (arr.length === 0) {
    return false;
  }

  // const [head, ...tail] = arr;
  const head = arr[0];
  const tail = arr.slice(1);

  // if (head === true) {
  //   return true;
  // }

  return head || or(tail);
}

let output = or([true, true, false]);
console.log(output); // --> true

output = or([false, false, false]);
console.log(output); // --> false