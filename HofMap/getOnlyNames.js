function getOnlyNames(arr) {
  
  // let getName = function(el){
  //   return el.name;
  // }

  // return arr.map(getName);
  
  return arr.map((el) => el.name)
}

let output = getOnlyNames([
  { name: 'Harry', age: 15 },
  { name: 'Ron', age: 14 },
  { name: 'Hermione', age: 14 },
]);
console.log(output);