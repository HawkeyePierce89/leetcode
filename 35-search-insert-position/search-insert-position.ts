export function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  let middleIndex = 0;

  while (left <= right) {
    middleIndex = Math.floor((left + right) / 2)

    if (nums[middleIndex] === target) {
      return middleIndex
    }

    if (nums[middleIndex] < target) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }

  return left;
};
