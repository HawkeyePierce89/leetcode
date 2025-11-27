import { search } from './binary-search';

describe('search', () => {
  test('should return -1 for an empty array', () => {
    expect(search([], 5)).toEqual(-1);
  });

  test('should return 0 when target is the only element', () => {
    expect(search([5], 5)).toEqual(0);
  });

  test('should return -1 when target is not found in single element array', () => {
    expect(search([5], 3)).toEqual(-1);
  });

  test('should find target at the beginning of the array', () => {
    expect(search([1, 2, 3, 4, 5], 1)).toEqual(0);
  });

  test('should find target at the end of the array', () => {
    expect(search([1, 2, 3, 4, 5], 5)).toEqual(4);
  });

  test('should find target in the middle of the array', () => {
    expect(search([1, 2, 3, 4, 5], 3)).toEqual(2);
  });

  test('should return -1 when target is smaller than all elements', () => {
    expect(search([2, 3, 4, 5], 1)).toEqual(-1);
  });

  test('should return -1 when target is larger than all elements', () => {
    expect(search([1, 2, 3, 4], 5)).toEqual(-1);
  });

  test('should return -1 when target is between elements but not present', () => {
    expect(search([1, 3, 5, 7], 4)).toEqual(-1);
  });

  test('should correctly search in array with negative numbers', () => {
    expect(search([-5, -3, 0, 2, 4], -3)).toEqual(1);
    expect(search([-5, -3, 0, 2, 4], 0)).toEqual(2);
    expect(search([-5, -3, 0, 2, 4], -1)).toEqual(-1);
  });
});
