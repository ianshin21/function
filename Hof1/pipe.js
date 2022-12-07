function pipe(...funcs) {
  
    return function(value){
      let result = value;
      for(let i = 0; i < funcs.length; i++){
          result = funcs[i](result);
      }
      return result;
    }

}

function square(num){
  return num * num;
}

function mul(num){
  return num * 2;
}

function add(num){
  return num + 10;
}

function isOdd(num) {
  return num % 2 !== 0;
} 

let output = pipe(add, square, mul);
console.log(output(5));


// func[0] == add