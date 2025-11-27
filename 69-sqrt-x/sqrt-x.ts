export function mySqrt(x: number): number {
  if (x === 0 || x === 1) {
    return x
  }

  let left = 1;
  let right = Math.floor(x / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sq = mid * mid;

    if (sq === x) {
      return mid;
    }

    if (sq < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};
