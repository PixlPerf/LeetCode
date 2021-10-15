const findMedianSortedArrays = require('./findMedianSortedArrays');

test('adds 1 + 2 to equal 3', () => {
  expect(findMedianSortedArrays([1,3], [2,4,5])).toBeCloseTo(3);
});