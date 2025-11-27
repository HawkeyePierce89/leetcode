import { searchInsert } from './search-insert-position';

describe('searchInsert', () => {
  test('should return index when target is found in the array', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2);
  });

  test('should return insert position when target is not found', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toEqual(1);
  });

  test('should return length when target is greater than all elements', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toEqual(4);
  });

  test('should return 0 when target is smaller than all elements', () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toEqual(0);
  });

  test('should return 0 when target is the first element', () => {
    expect(searchInsert([1, 3, 5, 6], 1)).toEqual(0);
  });

  test('should return last index when target is the last element', () => {
    expect(searchInsert([1, 3, 5, 6], 6)).toEqual(3);
  });

  test('should work with single element array - target found', () => {
    expect(searchInsert([5], 5)).toEqual(0);
  });

  test('should work with single element array - target smaller', () => {
    expect(searchInsert([5], 3)).toEqual(0);
  });

  test('should work with single element array - target larger', () => {
    expect(searchInsert([5], 7)).toEqual(1);
  });

  test('should work with negative numbers', () => {
    expect(searchInsert([-5, -3, 0, 2, 4], -3)).toEqual(1);
    expect(searchInsert([-5, -3, 0, 2, 4], -4)).toEqual(1);
    expect(searchInsert([-5, -3, 0, 2, 4], -6)).toEqual(0);
  });

  test('should find correct insert position in the middle', () => {
    expect(searchInsert([1, 3, 5, 7, 9], 4)).toEqual(2);
    expect(searchInsert([1, 3, 5, 7, 9], 6)).toEqual(3);
  });
});
