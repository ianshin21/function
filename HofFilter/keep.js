function keep(arr, keeper) {
 
  return arr.filter((el) => el === keeper)
}

let output = keep([1, 2, 3, 2, 1], 2)
console.log(output);


function keep(arr, keeper) {
  return arr.filter(function (el) {
    if (el === keeper) {
      return true;
    }
    return false;
  });
}