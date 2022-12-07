function sumOfArraysInArray(arr) {
  const joinedArr = arr.reduce(function (acc, cur) {
    return acc.concat(cur);
  });

  const onlyNumbers = joinedArr.filter(function (el) {
    return typeof el === 'number';
  });

  return onlyNumbers.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
}

let output = sumOfArraysInArray([
  [1, 2],
  [undefined, 4, '5'],
  [9, 'hello'],
]);
console.log(output); 