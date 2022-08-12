//isMountain.test.js

const isMountainCheck = require("./isMountain");

test("if array with one peak is true", () => {
  expect(isMountainCheck([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(true);
});

test("if array with two peaks are false", () => { 
  expect(isMountainCheck([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 9, 8, 7, 6, 5, 4, 3, 2])).toBe(false);
});

test("if plateaux are accepted", () => {
  expect(isMountainCheck([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 5, 4, 4, 3, 2, 1])).toBe(true);
} );

test("if a climbing wall is identified", () => {
  expect(isMountainCheck([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(false);
});

test("if a descending wall is identified", () => {
  expect(isMountainCheck([9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(false);
} );

test("if a micro-peak is identified", () => {
  expect(isMountainCheck([1, 2, 3, 2])).toBe(true);
} );

test("if there is no mountain", () => {
  expect(isMountainCheck([])).toBe(false);
});