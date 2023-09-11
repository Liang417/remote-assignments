// TC:O(log n), SC:O(1)
function binarySearchPosition(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // 3
