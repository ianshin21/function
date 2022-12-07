function computeAverageOfNumbers(arr) {
 
      if(arr.length != 0){
          return arr.reduce((acc, cur) => {
     
            return acc + cur;
          
          }, 0) / arr.length;
      }else{
        return 0;
      }
  
      // if (arr.length === 0) {
      //   return 0;
      // }
  
      // let total = arr.reduce(function (acc, cur) {
      //   return acc + cur;
      // });
    
      // return total / arr.length;     
  }
  

let output = computeAverageOfNumbers([4, 5, 6]);
console.log(output); 

