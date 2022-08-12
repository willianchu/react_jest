const gradingStudentsCheck = require("./gradingStudents");

test("if grade = 84 round to 85 (85-84 is less than 3)", () => {
  const grade = [84];
  expect(gradingStudentsCheck(grade)).toStrictEqual([85]);
});

// test("if grade = 29 do not round (result is still less than 40)", () => {
//   const grade = [29];
//   expect(gradingStudentsCheck(grade)).toStrictEqual([29]);
// });

// test("if grade = 57 do not round (60-57 is 3 or higher)", () => {
//   const grade = [57];
//   expect(gradingStudentsCheck(grade).toBe([57]));
// });

// test("if grade a full array of grades", () => {
//   const grade = [73, 67, 38, 33];
//   expect(gradingStudentsCheck(grade).toBe([75, 67, 40, 33]));
// });