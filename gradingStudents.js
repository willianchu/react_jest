// grades fro 0 to 100
// grades less then 40 are failing grades

// rounding rules are:
// 1- if the difference of multiple of 5 is less than 3, round up to the next multiple of 5
// 2- grades less than 38 are failing grades and are not rounded



function roundingRules(grade) {
  if (grade < 38) { return grade; }
  let lastDigit = grade % 10;
  lastDigit = lastDigit <= 5 ? lastDigit : lastDigit - 5;
  let sum2Round = 5 - lastDigit >= 3 ? 0 : 5 - lastDigit;
  return grade + sum2Round;
}

function gradingStudents(grades) {
  let newGrades = [];
  for(let i = 0; i < grades.length; i++) {
    newGrades[i] = roundingRules(grades[i]);
  }
  return newGrades;
}


// console.log( gradingStudents([73, 67, 38, 33]));

module.exports = gradingStudents;