function compose(func1, func2, num) {
  
  return func1(func2(num))
}

function isOdd(num){
  return num % 2 != 0;
}

function add5(num) {
  return num + 5;
}

function square(num){
  return num * num;
}

let output = compose(isOdd, square, 35);
console.log(output);