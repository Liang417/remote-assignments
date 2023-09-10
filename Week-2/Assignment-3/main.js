// TC:O(n), SC:O(n)
function count(input) {
  let map = {};
  input.forEach(item => {
    if (map[item]) {
      map[item]++;
    } else {
      map[item] = 1;
    }
  });
  return map;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];

console.log(count(input1)); // { a: 3, b: 1, c: 2, x: 1 }

// TC:O(n), SC:O(n)
function groupByKey(input2) {
  let map = {};
  input2.forEach(obj => {
    map[obj.key] = map[obj.key] ? map[obj.key] + obj.value : obj.value;
  });
  return map;
}

let input2 = [
  { key: 'a', value: 3 },
  { key: 'b', value: 1 },
  { key: 'c', value: 2 },
  { key: 'a', value: 3 },
  { key: 'c', value: 5 },
  ,
];

console.log(groupByKey(input2)); //{a:6, b:1, c:7}
