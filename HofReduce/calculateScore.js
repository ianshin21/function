function calculateScore(records, value) {
  
  // return records.reduce((acc, cur) => {
  //   if(cur.animal === value){
  //     return acc + cur.score;
  //   }else{
  //     return acc;
  //   }
  // }, 0)
  
  if(records.length != 0){

    let newArr = records.filter((el)=> el.animal === value);

    return newArr.reduce((acc, cur)=> {
      return acc + cur.score;
    }, 0)
  }else{
    return 0;
  }

  
}

const records = [
  {
    score: 63,
    animal: 'dog',
  },
  {
    score: 75,
    animal: 'dog',
  },
  {
    score: 87,
    animal: 'cat',
  },
  {
    score: 98,
    animal: 'cat',
  },
  {
    score: 24,
    animal: 'dog',
  },
];

let output = calculateScore(records, 'cat');
console.log(output);