function classicMovies(arr, year) {
  
  // let newArry = []
  // let yearBefore = function(el) {
   
  //   if(el.year < year){
  //     newArry.push(el.title + " by " + el.director);
  //   }    
  // }
  //   arr.map(yearBefore);
  // return newArry;

  // const beforeYear = arr.filter(function (movie) {
  //   return movie.year < year;
  // });

  // return beforeYear.map(function (movie) {
  //   return `${movie.title} by ${movie.director}`;
  // });

  let newArry = arr.filter((el)=> {
    return el.year < year;
  })

  return newArry.map((el)=>{
    return el.title + ' by ' + el.director;
  })


}





let output = classicMovies(
  [
    {
      title: 'Batman',
      year: 1989,
      director: 'Tim Burton',
      imdbRating: 7.6,
    },
    {
      title: 'Batman Returns',
      year: 1992,
      director: 'Tim Burton',
      imdbRating: 7.0,
    },
    {
      title: 'Batman Forever',
      year: 1995,
      director: 'Joel Schumacher',
      imdbRating: 5.4,
    },
  ],
  1993
);

console.log(output);