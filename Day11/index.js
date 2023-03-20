let arr = [1, 3, 3, 5, 5, 5, 5, 5, 6, 7, 6, 9];
let result = [];
for (let i = 0; i < arr.length; i++) {
	let count = [];
	for (let j = 0; j < arr.length; j++) {
		if (arr[i] == arr[j]) {
			count.push(arr[i]);
		}
	}
	if (count.length > result.length) {
		result = count;
	}
}
if (arr.length / 2 >= result.length) {
	console.log("kosong");
} else {
	console.log(result[0]);
}

// console.log(result2);

// angka pengecualian IV,IX,
const romanNumber = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

let str2 = "CX";
let result2 = 0;

for (let i = 0; i < str2.length; i++) {
	if (str2[i] === "I" && str2[i + 1] === "V") {
		result2 += 4;
		i++;
	} else if (str2[i] === "I" && str2[i + 1] === "X") {
		result2 += 9;
		i++;
	} else {
		result2 += romanNumber[str2[i]];
	}
}

console.log(result2);

function pascals(numRows) {
	if (numRows === 0) return [];
	if (numRows === 1) return [[1]];
	let result = [];
	for (let row = 1; row <= numRows; row++) {
		let arr = [];
		for (let col = 0; col < row; col++) {
			if (col === 0 || col === row - 1) {
				arr.push(1);
			} else {
				arr.push(result[row - 2][col - 1] + result[row - 2][col]);
			}
		}
		result.push(arr);
	}
	return result[2];
}

// console.log(pascals(3));
let arr3 = [7, 1, 6, 2, 3, 5];
let min = [...arr3];
let valMin = min.sort();
let index = arr3.indexOf(valMin[0]); // 1

let arr4 = []; // [ 1, 6, 2, 3, 5 ]
for (let i = index; i < arr3.length; i++) {
	arr4.push(arr3[i]);
}

let max = [...arr4];
let valMax = max.sort();
let index2 = arr3.indexOf(valMax[valMax.length - 1]); // 2

let result3 = arr3[index2] - arr3[index];
console.log(result3);
