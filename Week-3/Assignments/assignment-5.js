// TC:O(n),SC:O(n)
function twoSum(nums, target) {
  const map = new Map();
  let difference;
  for (let i = 0; i < nums.length; i++) {
    difference = target - nums[i];
    if (map.has(difference)) {
      return [map.get(difference), i];
    } else {
      map.set(nums[i], i);
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
