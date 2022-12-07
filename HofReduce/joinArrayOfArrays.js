function joinArrayOfArrays(arr) {
  return arr.reduce((acc, cur) => {
    return acc.concat(cur); 
  });
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output);



function joinArrayOfArrays(arr) {
  const joinedArr = arr.reduce(function (acc, val) {
    return acc.concat(val);
  });
  return joinedArr;
}
