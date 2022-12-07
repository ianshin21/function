function getIndex(arr, num) {
  
    let small = function(el){
      return el < num;
    }
    return arr.filter(small).length;
   
  //  return arr.filter(el => el < num).length;
}

let output = getIndex([5, 4, 1, 3], 2);
console.log(output);



function getIndex(arr, num) {
  return arr.filter(function (el) {
    return el < num;
  }).length;
}