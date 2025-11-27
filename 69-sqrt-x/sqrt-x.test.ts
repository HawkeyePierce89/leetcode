import { mySqrt } from './sqrt-x';

describe('mySqrt', () => {
  test('should return 2 for perfect square 4', () => {
    expect(mySqrt(4)).toEqual(2);
  });

  test('should return 2 for non-perfect square 8 (rounded down)', () => {
    expect(mySqrt(8)).toEqual(2);
  });

  test('should return 0 for x = 0', () => {
    expect(mySqrt(0)).toEqual(0);
  });

  test('should return 1 for x = 1', () => {
    expect(mySqrt(1)).toEqual(1);
  });

  test('should return 1 for x = 2', () => {
    expect(mySqrt(2)).toEqual(1);
  });

  test('should return 1 for x = 3', () => {
    expect(mySqrt(3)).toEqual(1);
  });

  test('should return 3 for perfect square 9', () => {
    expect(mySqrt(9)).toEqual(3);
  });

  test('should return 4 for perfect square 16', () => {
    expect(mySqrt(16)).toEqual(4);
  });

  test('should return 10 for perfect square 100', () => {
    expect(mySqrt(100)).toEqual(10);
  });

  test('should return 3 for x = 10 (rounded down)', () => {
    expect(mySqrt(10)).toEqual(3);
  });

  test('should return 3 for x = 15 (rounded down)', () => {
    expect(mySqrt(15)).toEqual(3);
  });

  test('should handle large numbers', () => {
    expect(mySqrt(2147395599)).toEqual(46339);
  });

  test('should return correct value for x = 25', () => {
    expect(mySqrt(25)).toEqual(5);
  });

  test('should return correct value for x = 26 (rounded down)', () => {
    expect(mySqrt(26)).toEqual(5);
  });
});
