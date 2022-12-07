function factorial(num) {
  
  // 별도의 최적화 기법(memoization)은 금지됩니다.
  // if(num != 0) {
  //  return num * factorial(num - 1);
  // } else {
  //   return 1;
  // }
  
  if(num <= 1) return 1;

  return num * factorial(num - 1);
}

let output = factorial(10);
console.log(output);