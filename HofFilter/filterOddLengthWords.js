function filterOddLengthWords(words) {
  
  let oddLengthW = function(word){
    return word.length % 2 === 1;
  }

  return newArr = words.filter(oddLengthW);

  // return words.filter((word) => word.length % 2 === 1)
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output);


function filterOddLengthWords(words) {
  return words.filter(function (el) {
    return el.length % 2 !== 0;
  });
}