const exercises = require('./exercises-01');

test('reverseString00 function exists', () => {
  expect(exercises.reverseString00).toBeDefined();
});

test('string is reversed', () => {
  expect(exercises.reverseString00('hello')).toEqual('olleh');
});
