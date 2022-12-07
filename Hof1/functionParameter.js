function square(num){
  return num * num
}

function functionParameter(func, num) {
  
  return func(num);
  
}

let funcPara = functionParameter(square, 5);
console.log(funcPara);