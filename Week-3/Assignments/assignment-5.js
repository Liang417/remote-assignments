// TC:O(n),SC:O(n)
function twoSum(nums, target) {
  const map = new Map();
  let difference;
  for (let i = 0; i < nums.length; i++) {
    difference = target - nums[i];
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      map.set(difference, i);
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]