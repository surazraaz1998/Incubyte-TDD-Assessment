const add = require("../Incubyte-TDD-Assessment/index");

test('should return 0 for an empty string', () => {
  expect(add("")).toBe(0);
});