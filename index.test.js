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

test('should handle new lines as well as commas between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });

test('should support custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

test('should throw an exception when negative numbers are used', () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });