function studentReports(students) {
  const onlyFemales = students.filter(function (el) {
    return el.gender === 'female';
  });

  return onlyFemales.map(function (el) {
    const sum = el.grades.reduce(function (acc, cur) {
      return acc + cur;
    }, 0);
    const avg = sum / el.grades.length;

    el.grades = avg;
    return el;
  });
}

let studentList = [
  {
    name: 'Anna',
    gender: 'female',
    grades: [4.5, 3.5, 4],
  },
  {
    name: 'Dennis',
    gender: 'male',
    country: 'Germany',
    grades: [5, 1.5, 4],
  },
  {
    name: 'Martha',
    gender: 'female',
    grades: [5, 4, 4, 3],
  },
  {
    name: 'Brock',
    gender: 'male',
    grades: [4, 3, 2],
  },
];

let output = studentReports(studentList);

console.log(output); 
