function square(num){
  return num * num;
}

function applyTwice(func, num) {
 
  // const num2 = func(num);
  // return func(num2);
  return func(func(num));
}

let twice = applyTwice(square, 9);
console.log(twice);