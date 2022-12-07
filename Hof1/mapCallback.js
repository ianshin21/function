function mapCallback(func, arr) {
  // TODO: 여기에 코드를 작성합니다.
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(func(arr[i]));
  }
  return newArr;
}

function square(num){
  return Math.pow(num, 2);
}

function mul10(num){
  return num * 10;
}

let output = mapCallback(square, [2, 3, 4]);
console.log(output);

output = mapCallback(mul10, [2, 4, 7]);
console.log(output); // --> [20, 40, 70]

output = mapCallback(square, []);
console.log(output); // --> []