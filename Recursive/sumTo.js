function sumTo(num) {
  
  // if(num != 0){
  // return num + sumTo(num - 1);
  // }else{
  //   return 0;
  // }
  
  if(num === 0) return 0;   // 탈출조건 //Base case

  return num + sumTo(num - 1);
  
}

let output = sumTo(10);
console.log(output); 