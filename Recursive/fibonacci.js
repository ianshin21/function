//수(num)를 입력받아 피보나치 수열의 num번째 요소를 리턴해야 합니다.

function fibonacci(num) {

  // 별도의 최적화 기법(memoization)은 금지됩니다.

  // if(num == 0){
  //   return 0;
  // }
  // if(num == 1){
  //   return 1;
  // }
  
  if(num <= 1) return num;

    return fibonacci(num - 1) + fibonacci(num - 2)

}

let output = fibonacci(5);
console.log(output);