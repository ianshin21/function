function compose2(func1, func2) {
  // TODO: 여기에 코드를 작성합니다.
  // const result = function(value){
  //   return func1(func2(value));
  // }
  // return result;
  // return func1(func2(value)); error
  return function(value){
    return func1(func2(value));
  }
}

function square(num){
  return num * num;
}

function isOdd(num){
  return num % 2 != 0;
}

function add5(num) {
  return num + 5;
}

let output = compose2(isOdd, square);
console.log(output(5));