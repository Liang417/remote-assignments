// TC:O(n)
function max(numbers) {
  if (numbers.length === 0) return 0;

  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// TC:O(n)
function findPosition(numbers, target) {
  if (numbers.length === 0) return -1;

  let index = -1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      index = i;
      break;
    }
  }
  return index;
}

console.log(max([1, 2, 4, 5])); // 5
console.log(max([5, 2, 7, 1, 6])); // 7

console.log(findPosition([5, 2, 7, 1, 6], 5)); // 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // 2
console.log(findPosition([5, 2, 7, 1, 6], 8)); // -1
