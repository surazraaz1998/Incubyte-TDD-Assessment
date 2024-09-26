const add = require("../Incubyte-TDD-Assessment/index");

test('should return 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('should return the number itself if only one number is provided', () => {
    expect(add("1")).toBe(1);
  });

test('should return the sum of two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
  });

test('should handle an unknown amount of numbers', () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });