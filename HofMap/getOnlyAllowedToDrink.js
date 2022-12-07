function getOnlyAllowedToDrink(arr) {
  const filteredList = arr.filter(function (person) {
    return person.age >= 18;
  });

  return filteredList.map(function (person) {
    return person.name;
  });

  // let result = [];
  // arr.map((el) => {
  //   if(el.age >= 18){
  //     result.push(el.name);
  //   }
  // })
  // return result;
}

output = getOnlyAllowedToDrink([
  { name: 'Cho', age: 14 },
  { name: 'Dumbledore', age: 87 },
  { name: 'Snape', age: 53 },
  { name: 'Hagrid', age: 43 },
]);
console.log(output);