function countAandB(input) {
	let count = 0;
	input.forEach(item => {
		if (item === 'a' || item === 'b') {
			count++;
		}
	});
	return count;
}

function toNumber(input) {
	let result = [];
	input.forEach(item => {
		result.push(item.charCodeAt(0) - 96);
	});
	return result;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];

console.log(countAandB(input1)); // 4
console.log(toNumber(input1)); // [1, 2, 3, 1, 3, 1, 3]

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // 0
console.log(toNumber(input2)); // [5, 4, 3, 4, 5]
