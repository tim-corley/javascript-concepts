const exercises = require('./exercises-02');

test('array is chunked properly by given length', () => {
  expect(exercises.chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
  ]);
});

test('"elbow" and "below" is an anagram', () => {
  expect(exercises.isAnagram('elbow', 'below')).toBeTruthy();
});

test('"Dormitory" and "dirty room!!" is an anagram', () => {
  expect(exercises.isAnagram('elbow', 'below')).toBeTruthy();
});

test('"thunder" and "lightning" is NOT an anagram', () => {
  expect(exercises.isAnagram('thunder', 'lightning')).toBeFalsy();
});
