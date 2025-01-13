import { sortArray } from './sort-an-array';

describe('sortArray', () => {
  test('should return an empty array when input is empty', () => {
    expect(sortArray([])).toEqual([]);
  });

  test('should correctly handle an array with a single element', () => {
    expect(sortArray([5])).toEqual([5]);
  });

  test('should return the same array if it is already sorted', () => {
    expect(sortArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should sort a small array in ascending order', () => {
    expect(sortArray([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test('should correctly sort an array with negative numbers', () => {
    expect(sortArray([-1, 0, -2, 5, 2])).toEqual([-2, -1, 0, 2, 5]);
  });

  test('should correctly sort an array with duplicate values', () => {
    expect(sortArray([4, 2, 2, 4, 3])).toEqual([2, 2, 3, 4, 4]);
  });

  test('should correctly sort an array with a large range of values', () => {
    const input = [1000, -999, 100, 1001, -1000];
    const sorted = [-1000, -999, 100, 1000, 1001];
    expect(sortArray(input)).toEqual(sorted);
  });
});
