function removeElement(arr, discarder) {
  
  return arr.filter((el) => el != discarder)

}


let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output);


function removeElement(arr, discarder) {
  return arr.filter(function (el) {
    if (el !== discarder) {
      return true;
    }
    return false;
  });
}