function filterCallback(func, arr) {
  
  const newArr = [];
  for(let i = 0; i < arr.length; i++){

    if (func(arr[i])) {
      newArr.push(arr[i]);
    }
    
  }
  return newArr
}

function isOdd(num){
  return num % 2 === 1;
}

function isEven(num) {
  return !isOdd(num);
}

let output = filterCallback(isOdd, [1, 2, 3, 4, 5, 6, 7, 8]);
console.log(output);

output = filterCallback(isEven, [1, 2, 3, 4]);
console.log(output); // --> [2, 4]
