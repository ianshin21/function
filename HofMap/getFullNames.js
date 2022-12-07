function getFullNames(arr) {
  
  // let fullName = function(el){
  //   return el.firstName + " " + el.lastName;
  // }

  // return arr.map(fullName);

  // return arr.map(function (person) {
  //   return `${person.firstName} ${person.lastName}`;
  // });

  return arr.map((el)=>{
    return el.firstName + ' ' + el.lastName;
  })
}


output = getFullNames([
  {
    firstName: 'Adam',
    lastName: 'Smith',
  },
  {
    firstName: 'Jack',
    lastName: 'Black',
  },
  {
    firstName: 'Samuel',
    lastName: 'Jackson',
  },
]);
console.log(output);